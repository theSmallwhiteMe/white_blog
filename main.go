package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.POST("/ping", func(c *gin.Context) {
		//c.Header("Access-Control-Allow-Headers", "*")
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run(":8060") // 监听并在 0.0.0.0:8080 上启动服务
}