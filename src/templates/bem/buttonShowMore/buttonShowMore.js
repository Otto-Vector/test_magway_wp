import $ from 'jquery'
import { copyBlog } from '../../main'

//функция добавления блогов по событию
$(function () {

    let nowHere = 0

    $(".buttonShowMore").click(function() {

        nowHere = copyBlog(nowHere, 6)

        //зацикливание загрузки
        if (nowHere >= 90) nowHere = 0;

    });

})
