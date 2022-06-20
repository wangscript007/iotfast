/*
* @desc:错误处理
* @url:www.ddsiot.cn
* @Author: dwx
* @Date:   2022/5/2 14:53
 */

package liberr

import (
	"context"

	"github.com/gogf/gf/v2/frame/g"
)

func ErrPrint(ctx context.Context, err error, msg ...string) {
	if !g.IsNil(err) {
		if len(msg) > 0 {
			g.Log().Error(ctx, err.Error())
			panic(msg[0])
		} else {
			panic(err.Error())
		}
	}
}

func NilErrPanic(value interface{}, msg string) {
	if g.IsNil(value) {
		panic(msg)
	}
}
