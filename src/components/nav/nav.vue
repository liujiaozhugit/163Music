<template>
    <div id="nav">
        <nav class="navbar-default">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">网易云音乐</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <!-- <a href="#"></a> -->
                        <router-link :to="{path:'/'}">
                            推荐
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/toplist'}">
                            排行榜
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'/catlist'}">
                            歌单
                        </router-link>
                    </li>
                    <li><a href="#">主播电台</a></li>
                    <li><a href="#">歌手</a></li>
                    <li><a href="#">新碟上架</a></li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                    <input type="text" class="form-control" placeholder="搜索">
                    </div>
                    <button type="submit" class="btn btn-default">搜索</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">登录 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">手机号登录</a></li>
                        <li><a href="#">邮箱登录</a></li>
                        <li><a href="#">微信登录</a></li>
                        <li><a href="#">QQ登录</a></li>
                    </ul>
                    </li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
            </nav>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
 
</style>


