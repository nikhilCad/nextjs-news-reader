// main.go
package main

import (
    // "fmt"
    // "log"
    "net/http"
	// "github.com/mmcdole/gofeed"
	"github.com/gin-gonic/gin"
)


type Item struct {
	Title       string `json:"title"`
	Link        string `json:"link"`
	Description string `json:"description"`
}

type Data struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Link        string `json:"link"`
	Items       []Item `json:"items"`
}

// var dataStore []Data

var dataStore = []Data{
	{
		Title:       "Example Title 1",
		Description: "This is an example description for Title 1",
		Link:        "http://example.com/1",
		Items: []Item{
			{Title: "Item 1.1", Link: "http://example.com/1.1", Description: "Description for Item 1.1"},
			{Title: "Item 1.2", Link: "http://example.com/1.2", Description: "Description for Item 1.2"},
		},
	},
	{
		Title:       "Example Title 2",
		Description: "This is an example description for Title 2",
		Link:        "http://example.com/2",
		Items: []Item{
			{Title: "Item 2.1", Link: "http://example.com/2.1", Description: "Description for Item 2.1"},
			{Title: "Item 2.2", Link: "http://example.com/2.2", Description: "Description for Item 2.2"},
		},
	},
}

func main() {
	r := gin.Default()

	// Define the routes
	r.GET("/data", getData)
	r.POST("/data", createData)
	r.GET("/data/:id", getDataByID)
	r.PUT("/data/:id", updateData)
	r.DELETE("/data/:id", deleteData)

	// Run the server
	r.Run(":8080")
}

func getData(c *gin.Context) {
	c.JSON(http.StatusOK, dataStore)
}

func createData(c *gin.Context) {
	var newData Data
	if err := c.BindJSON(&newData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	dataStore = append(dataStore, newData)
	c.JSON(http.StatusCreated, newData)
}

func getDataByID(c *gin.Context) {
	id := c.Param("id")
	for _, item := range dataStore {
		if item.Title == id {
			c.JSON(http.StatusOK, item)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Data not found"})
}

func updateData(c *gin.Context) {
	id := c.Param("id")
	var updatedData Data
	if err := c.BindJSON(&updatedData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	for i, item := range dataStore {
		if item.Title == id {
			dataStore[i] = updatedData
			c.JSON(http.StatusOK, updatedData)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Data not found"})
}

func deleteData(c *gin.Context) {
	id := c.Param("id")
	for i, item := range dataStore {
		if item.Title == id {
			dataStore = append(dataStore[:i], dataStore[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Data deleted"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Data not found"})
}


// func main() {

// 	fp := gofeed.NewParser()
// 	feed, _ := fp.ParseURL("http://feeds.twit.tv/twit.xml")
// 	fmt.Println(feed.Title)
// 	fmt.Println(feed.Description)
// 	fmt.Println(feed.Link)
// 	fmt.Println(feed.Items[0].Title)

//     http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
//         w.Header().Set("Content-Type", "application/json")
//         fmt.Fprintf(w, `{"message": "Hello from Go backend"}`)
//     })

//     log.Println("Server is running on port 8080")
//     log.Fatal(http.ListenAndServe(":8080", nil))
// }




// type Feed struct {
// 	Title           string                   `json:"title,omitempty"`
// 	Description     string                   `json:"description,omitempty"`
// 	Link            string                   `json:"link,omitempty"`
// 	FeedLink        string                   `json:"feedLink,omitempty"`
// 	Links           []string                 `json:"links,omitempty"`
// 	Updated         string                   `json:"updated,omitempty"`
// 	UpdatedParsed   *time.Time               `json:"updatedParsed,omitempty"`
// 	Published       string                   `json:"published,omitempty"`
// 	PublishedParsed *time.Time               `json:"publishedParsed,omitempty"`
// 	Author          *Person                  `json:"author,omitempty"` // Deprecated: Use feed.Authors instead
// 	Authors         []*Person                `json:"authors,omitempty"`
// 	Language        string                   `json:"language,omitempty"`
// 	Image           *Image                   `json:"image,omitempty"`
// 	Copyright       string                   `json:"copyright,omitempty"`
// 	Generator       string                   `json:"generator,omitempty"`
// 	Categories      []string                 `json:"categories,omitempty"`
// 	DublinCoreExt   *ext.DublinCoreExtension `json:"dcExt,omitempty"`
// 	ITunesExt       *ext.ITunesFeedExtension `json:"itunesExt,omitempty"`
// 	Extensions      ext.Extensions           `json:"extensions,omitempty"`
// 	Custom          map[string]string        `json:"custom,omitempty"`
// 	Items           []*Item                  `json:"items"`
// 	FeedType        string                   `json:"feedType"`
// 	FeedVersion     string                   `json:"feedVersion"`
// }

// type Image struct {
// 	URL   string `json:"url,omitempty"`
// 	Title string `json:"title,omitempty"`
// }

// type Item struct {
// 	Title           string                   `json:"title,omitempty"`
// 	Description     string                   `json:"description,omitempty"`
// 	Content         string                   `json:"content,omitempty"`
// 	Link            string                   `json:"link,omitempty"`
// 	Links           []string                 `json:"links,omitempty"`
// 	Updated         string                   `json:"updated,omitempty"`
// 	UpdatedParsed   *time.Time               `json:"updatedParsed,omitempty"`
// 	Published       string                   `json:"published,omitempty"`
// 	PublishedParsed *time.Time               `json:"publishedParsed,omitempty"`
// 	Author          *Person                  `json:"author,omitempty"` // Deprecated: Use item.Authors instead
// 	Authors         []*Person                `json:"authors,omitempty"`
// 	GUID            string                   `json:"guid,omitempty"`
// 	Image           *Image                   `json:"image,omitempty"`
// 	Categories      []string                 `json:"categories,omitempty"`
// 	Enclosures      []*Enclosure             `json:"enclosures,omitempty"`
// 	DublinCoreExt   *ext.DublinCoreExtension `json:"dcExt,omitempty"`
// 	ITunesExt       *ext.ITunesItemExtension `json:"itunesExt,omitempty"`
// 	Extensions      ext.Extensions           `json:"extensions,omitempty"`
// 	Custom          map[string]string        `json:"custom,omitempty"`
// }
