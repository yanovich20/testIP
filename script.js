const numberNearByCells = 2;
document.addEventListener("DOMContentLoaded",function(){
    let btns = document.querySelectorAll(".btn");
    btns.forEach(function(btn){
        btn.addEventListener("click",function(){ //подключаем обработчик перекрашивания ячеек на все кнопки
            toColor();
        });
    });
    btnTwo = document.querySelector(".button-2");
    btnTwo.addEventListener("click",function(){ //подключение обработки второй кнопки
        alert("Количество искомых ячеек: "+calculateCells());
    });
});
function toColor(){
    let cells = document.querySelectorAll("table td");//получить все ячейки
    cells.forEach(function(cell){
        if(!cell.classList.contains("yellow"))
            cell.classList.add("yellow"); //добавить класс для перекрашивания
    });
}
function calculateCells(){
    let columnsCount = document.querySelectorAll("table th").length; //количество колонок
    let rowsCount = document.querySelectorAll("table tbody tr").length; //количество строк
    let cellsWithZeroAndNearByOnes =0;
    for(let index=0;index<rowsCount;index++)//проход по строкам
    {
        for(let jndex=0;jndex<columnsCount;jndex++)//проход по колонкам
        {
            let table = document.querySelector("table");//ссылка на таблицу
            let element = table.rows[index].cells[jndex];//текущий элемент
            let countCellsWithNearByOnes = 0; // количество соседних ячеек, в которых 1
            if(element.innerText == "0") // если текеущий элемент с 0, то запускаем подсчет
            {
                if(index>0)
                {
                    let elementUp = table.rows[index-1].cells[jndex];//ячейка сверху
                    if(elementUp.innerText == "1")
                    {
                        countCellsWithNearByOnes++;
                    }
                }
                if(jndex>0)
                {
                    let elementLeft = table.rows[index].cells[jndex-1];//ячейка слева
                    if(elementLeft.innerText == "1")
                    {
                        countCellsWithNearByOnes++;
                    }
                }
                if(jndex<columnsCount-1)
                {
                    let elementRight = table.rows[index].cells[jndex+1];//ячейка справа
                    if(elementRight.innerText == "1")
                    {
                        countCellsWithNearByOnes++;
                    }
                }
                if(index<rowsCount-1)
                {
                    let elementBottom = table.rows[index+1].cells[jndex];//ячейка снизу
                    if(elementBottom.innerText == "1")
                    {
                        countCellsWithNearByOnes++;
                    }
                }
                console.log(countCellsWithNearByOnes)
                if(countCellsWithNearByOnes>numberNearByCells)//если количество ячеек больше заданного
                {
                    cellsWithZeroAndNearByOnes++;//наращиваем счетчик искомых ячеек
                }
            }
        }
    }
    return cellsWithZeroAndNearByOnes;
}