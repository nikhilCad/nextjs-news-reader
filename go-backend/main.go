package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
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

var feeds = []feed {
	{
		Title: "Hacker Earth", 
		Description: "Coding field", 
		Link:"http://NA", 
		Items : []item {
			{Title:"Hi", Link:"ab", Description:"cd"},
			{Title:"Hi", Link:"ab", Description:"cd"},

		},
	},
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
