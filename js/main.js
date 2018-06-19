<!DOCTYPE html>
    <html lang="zh-CN">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
            <title>毕业季</title>

            <!-- Bootstrap -->
            <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
            <!-- Cropper -->
            <link href="./cropper/croppe.css" rel="stylesheet">
            <link href="./css/index.css" rel="stylesheet">
        </head>
    <body>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img alt="SYSU" src="./picture/SYSU.jpg" width="25" height="25">
                    </a>
                    <p class="navbar-text">毕业季头像生成器</p>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    </br>
                    </br>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <img id="header" class="img-responsive center-block" src="./picture/header.jpg">
                </div>
            </div>
            </br>
            <div class="row">
                <div class="col-xs-12">
                    <div class="tips">
                        <h4 id="tips1">请上传你的图片</h4>
                    </div> 
                </div>
                <div class="col-xs-12">
                    <label class="btn btn-default one" for="inputImage">
                        <input id="inputImage" type="file" name="inputImage" class="hidden button button-pill">
                        <span>选择图片</span>
                    </label>
                </div>
            </div>
            <div class="row" id="choose">
                </br>
                </br>
                </br>
            </div> 
            <div class="row operate hidden">
                <div class="col-xs-12">
                    <div class="tips">
                        <h4 id="tips1">请选择你想要使用的模板</h4>
                    </div>   
                <div class="col-xs-12">
                    </br>
                </div>   
                    <button type="button" class="btn btn-tpl" id="pic1" style="background-image: url(./picture/pic1.png);"></button>
                    <button type="button" class="btn btn-tpl" id="pic2" style="background-image: url(./picture/pic2.png);"></button>
                    <button type="button" class="btn btn-tpl" id="pic3" style="background-image: url(./picture/pic3.png);"></button>
                    <button type="button" class="btn btn-tpl" id="pic4" style="background-image: url(./picture/pic4.png);"></button>
                    <button type="button" class="btn btn-tpl" id="pic5" style="background-image: url(./picture/pic1.png);"></button>
                    <button type="button" class="btn btn-tpl" id="pic6" style="background-image: url(./picture/pic1.png);"></button>
                </div>
            </div>
            <div class="row" id="operating">
                </br>
            </div>  
            <div class="row operate hidden" >
                <div class="col-xs-12">
                    <div class="tips">
                        <h4 id="tips1">编辑图片，生成你的专属头像</h4>
                    </div> 
                </div>
            </div>
            <div class="row operate hidden">
                </br>
            </div>  
            <div class="row operate hidden">
                <div class="col-xs-5">
                    <label class="btn btn-default two" for="generate">
                        <button id="generate" class="hidden button button-pill"></button> 
                        <span>生成头像</span>
                    </label>
                    <label class="btn btn-default two" for="reset">
                        <button id="reset" class="hidden button button-pill"></button>
                        <span>重&#160&#160&#160&#160&#160&#160&#160置</span>
                    </label>
                </div>
                <div class="col-xs-7">
                    <div class="img-preview">
                        <img src="">
                    </div>
                    <img id="avatarPreview" src="./picture/pic1.png" >
                </div>
            </div> 
            <div class="row operate hidden">
            </div> 

            <div class="row operate hidden">
                <div class="col-xs-12">
                    <div class='panel-sysu93'>
                        <div class="img-container">
                            <img id="image" src="./picture/1.jpg" alt="Picture" style="max-width: 100%">
                        </div>
                    </div>    
                </div>
            </div>
            <div class="row operate hidden">
                </br>
            </div>   
            
            <div class="row generating hidden">
                </br>
            </div>     
            <div class="row generating hidden" id="generatingImg">
                <div class="col-xs-12">
                    <div class="tips">
                        <h4 id="tips1">保存图片</h4>
                    </div> 
                </div>
            </div>
            <div class="row generating hidden">
                <div>
                    <h5 style="text-align: center;">长按图片以保存</h5>
                </div>
                <div class="col-xs-12">
                    <div class="panel-body">
                        <img src="http://news2.sysu.edu.cn/sysu93/index.html" id="outputImage" class="img-responsive" alt="图片生成中，请稍等">
                    </div>
                </div>
            </div>
             <div class="row">
                </br>
            </div>  
            <div class="row">
                <div class="tips">
                    <h5 id="tips1">共青团中山大学委员会</h5>
                </div> 
            </div>
        </div>
        <canvas id="myCanvas" style="display: none;"></canvas>


        <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
        <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
        <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
        <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="./cropper/croppe.js"></script>
        <script src="./js/main.js"></script>
    </body>
</html>
