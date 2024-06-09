package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/mmcdole/gofeed"
)

// struct fields need to be uppercase, json field lowercase is just preference
type item struct {
	Title       string `json:"title"`
	Link        string `json:"link"`
	Description string `json:"description"`
}

type feed struct{
	Title string `json:"title"`
	Description string `json:"description"`
	Link string `json:"link"`
	Items []item `json:"items"`
}

var fp = gofeed.NewParser()
var feedParsed, _ = fp.ParseURL("http://feeds.twit.tv/twit.xml")

var feeds = populateFeeds(feedParsed)

func populateFeeds(feedParsed *gofeed.Feed) []feed {
	var feeds []feed

	newFeed := feed{
		Title:       feedParsed.Title,
		Description: feedParsed.Description,
		Link:        feedParsed.Link,
	}

	for _, parsedItem := range feedParsed.Items {
		newItem := item{
			Title:       parsedItem.Title,
			Link:        parsedItem.Link,
			Description: parsedItem.Description,
		}
		newFeed.Items = append(newFeed.Items, newItem)
	}

	feeds = append(feeds, newFeed)

	return feeds

}

func getFeeds(context *gin.Context){
	context.IndentedJSON(http.StatusOK, feeds)
}

func createFeed(c *gin.Context) {
	var newFeed feed
	if err := c.BindJSON(&newFeed); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	feeds = append(feeds, newFeed)
	c.IndentedJSON(http.StatusCreated, newFeed)
}

func main() {
	router := gin.Default()
	router.GET("/feeds", getFeeds)
	router.POST("/feeds", createFeed)
	router.Run("localhost:8090")
}
