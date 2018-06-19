$(function () {

    'use strict';

    var console = window.console || { log: function () {} },
        $alert = $('.docs-alert'),
        $message = $alert.find('.message'),
        showMessage = function (message, type) {
            $message.text(message);

            if (type) {
                $message.addClass(type);
            }

            $alert.fadeIn();

            setTimeout(function () {
                $alert.fadeOut();
            }, 3000);
        };

  // Demo
  // -------------------------------------------------------------------------

    function abc(img) {
        var newImg = new Image;
        return newImg.crossOrigin = "*",
        newImg.src = img, 
       newImg
    }

    (function () {
        var $image = $('.img-container > img'),
            $dataX = $('#dataX'),
            $dataY = $('#dataY'),
            $dataHeight = $('#dataHeight'),
            $dataWidth = $('#dataWidth'),
            $dataRotate = $('#dataRotate'),
            options = {
                // strict: false,
                // responsive: false,
                // checkImageOrigin: false

                // modal: false,
                guides: false,
                // highlight: false,
                // background: false,

                // autoCrop: false,
                // autoCropArea: 0.5,
                // dragCrop: false,
                movable: false,
                resizable: false,
                // rotatable: false,
                // zoomable: false,
                // touchDragZoom: false,
                // mouseWheelZoom: false,

                // minCanvasWidth: 320,
                // minCanvasHeight: 180,
                // minCropBoxWidth: 160,
                // minCropBoxHeight: 90,
                // minContainerWidth: 320,
                // minContainerHeight: 180,

                // build: null,
                // built: null,
                // dragstart: null,
                // dragmove: null,
                // dragend: null,
                // zoomin: null,
                // zoomout: null,
                viewMode : 1,
                aspectRatio: 1 / 1,
                preview: '.img-preview',
                dragMode: 'none',
                crop: function (data) {
                    $dataX.val(Math.round(data.x));
                    $dataY.val(Math.round(data.y));
                    $dataHeight.val(Math.round(data.height));
                    $dataWidth.val(Math.round(data.width));
                   $dataRotate.val(Math.round(data.rotate));
                }
            };

        $image.on({
            'build.cropper': function (e) {
                console.log(e.type);
            },
            'built.cropper': function (e) {
                console.log(e.type);
            },
            'dragstart.cropper': function (e) {
                console.log(e.type, e.dragType);
            },
            'dragmove.cropper': function (e) {
                console.log(e.type, e.dragType);
           },
            'dragend.cropper': function (e) {
                console.log(e.type, e.dragType);
           },
            'zoomin.cropper': function (e) {
                console.log(e.type);
           },
            'zoomout.cropper': function (e) {
                console.log(e.type);
            }
        }).cropper(options);

        var mystyle；

        $("#pic1").on("click", function() {
            var totalpath = "./picture/pic1.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });

        $("#pic2").on("click", function() {
            var totalpath = "./picture/pic2.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });

        $("#pic3").on("click", function() {
            var totalpath = "./picture/pic3.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });

        $("#pic4").on("click", function() {
            var totalpath = "./picture/pic4.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });

        $("#pic5").on("click", function() {
            var totalpath = "./picture/pic1.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });

        $("#pic6").on("click", function() {
            var totalpath = "./picture/pic1.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src)
            };
        });


        $("#reset").on("click", function () {
            $('#image').cropper('reset');
        });


        $("#generate").on("click", function() {
            if (!$(this).hasClass("disabled")) {
                $("#outputImage").attr("src", null);
                const e = 640;
                var t = $image.cropper('getData');
                var a = t.width;
                var n = t.x;
                var i = t.y;
                var o = e / a;
                var l = $image.cropper('getImageData');
                var c = l.naturalHeight;
                var d = l.naturalWidth;
                var m = document.getElementById("myCanvas");
                m.width = e;
                m.height = e;
                var u = m.getContext("2d");
                u.fillStyle = "#fff";
                u.fillRect(0, 0, e, e);
                var g = document.getElementById("image");
                g.crossOrigin = "*";
                u.drawImage(g, -n * o, -i * o, d * o, c * o);
                u.drawImage(mystyle, 0, 0, e, e);
                var v = document.getElementById("outputImage");
                v.src = m.toDataURL("");
            }                
            $(".generating").removeClass("hidden"), 
            document.getElementById("generatingImg").scrollIntoView();
        });


        var $inputImage = $('#inputImage'),
            URL = window.URL || window.webkitURL,
            blobURL;

        if (URL) {
            $inputImage.change(function () {
                var files = this.files,
                file;

                if (files && files.length) {
                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        blobURL = URL.createObjectURL(file);
                        $("#image").attr('src' , blobURL);
                        $image.one('built.cropper', function () {
                            URL.revokeObjectURL(blobURL); // Revoke when load complete
                        }).cropper('reset', true).cropper('replace', blobURL);
                        $inputImage.val('');
                        $(".operate").removeClass("hidden"), 
                        document.getElementById("operating").scrollIntoView()

                    } else {
                        showMessage('请选择图片！');
                    }
                }
            });
        } else {
            $inputImage.parent().remove();
        };


    }());


});
