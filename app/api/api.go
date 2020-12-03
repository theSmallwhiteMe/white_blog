package api

import (
	"github.com/gin-gonic/gin"
)

var GinHttp *gin.Engine

func init()  {
	GinHttp = gin.Default()
	GinHttp.POST("/api/auth",auth)
}

func Success(c *gin.Context,res interface{}) {
	c.JSON(200, gin.H{
		"ok": true,
		"data":res,
	})
}

func Error(c *gin.Context,msg string) {
	c.JSON(200, gin.H{
		"ok": false,
		"msg":msg,
	})
}

func auth(c *gin.Context) {

}