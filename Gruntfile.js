module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 7 //定义 PNG 图片优化水平
                },
                files: [
                       {
                    expand: true,
                    cwd: 'src/imgs/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'gruntimg' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                    ]
                }
            },
            });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('img', ['imagemin']);
};
