import './bem/blocks-library/blocks-library.js';
import $ from 'jquery'

//функция добавления блогов
//возвращает позицию, на которой закончился отсчет подгрузки
function copyBlog(nowHere = 0, howMany= 6) {

    let block_name = '.blog',
        header_class = block_name+'__title',
        text_class = block_name+'__summary',
        link_class = 'readMoreLink__link';


    let domBlog = $(block_name).get(0)
    let blogClone
    let appendElement = ".blogs-wrapper"
    let toNext = nowHere+howMany

    //функция запроса поста
    for (let i = nowHere+1; i <= toNext; i++) {

        fetch('https://jsonplaceholder.typicode.com/posts/'+i)
          .then((response) => response.json())
          .then((json) =>  writeToBlog(json))

    }

    //функция добавления элемента по результату загрузки
    function writeToBlog(json) {
        blogClone = $(domBlog).clone()

        //добавляем данные из json в тело dom
        $(blogClone).find(header_class).text(json.title)
        $(blogClone).find(text_class).text(json.body)

        //добавляем сам элемент
        $(blogClone).appendTo(appendElement)

        //добавляем эффект появления
        $(blogClone).hide()
        $(blogClone).slideDown()
    }

  return toNext
}

export { copyBlog }
