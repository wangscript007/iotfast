/*
* @desc:system base controller
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/4 18:12
 */

package controller

import (
	commonController "iotfast/internal/app/common/controller"

	"github.com/gogf/gf/v2/net/ghttp"
)

type BaseController struct {
	commonController.BaseController
}

// Init 自动执行的初始化方法
func (c *BaseController) Init(r *ghttp.Request) {
	c.BaseController.Init(r)
}