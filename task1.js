//1. Бейджики: Наши сотрудники хотят бейджики, поэтому нужно написать функцию, которая поможет нам их создавать.На вход она ждет Имя и Фамилию, а возвращает объект вида: { firstName, lastName, fullName }, где каждое свойство можно читать и менять.Если предметом изменений является firstName или lastName, то правим fullName. Если же это fullName, то заменяем firstName и lastName. На примере с кодом станет понятнее.
//OOП: Наследование
class Badge{
    constructor(firstName, lastName){
    //"_" - приватное свойство
        this._firstName = firstName;
        this._lastName = lastName;
    }
    //получить значение приватного сво-ва firstName
    get firstName(){
        return this._firstName
    }
    //установитт новое значение приватного сво-ва firstName
    set firstName(value){
        this._firstName = value
        
    }
    //получить значение приватного сво-ва lastName
    get lastName(){
        return this._lastName
    }
   //установитт новое значение приватного сво-ва lastName
    set lastName(value){
        this._lastName = value
        
    }
    //получить полное имя
    getFullName(){
        return `${this._firstName} ${this._lastName}`
    }
    //создать эл-т для добавления на страницу
    createHTML(){
       return `<p class ="indiv-badge">${this.getFullName()}</p>`
    }
    //отрисовать бейдж
    render(){
        //insertAdjacentHTML - позволяет вставлять строку HTML кода непосредственно в DOM, вкллючат два параметра позиция и сам  элемент для вставки
        //'beforebegin' - перед целевым элементом
        document.querySelector('.all-badgies').insertAdjacentHTML('beforeend', this.createHTML());
    }
}

let maria = new Badge("Maria", "Ivanova");
maria.render()

let pavel = new Badge("Pavel", "Trunov");
pavel.render()

let paul = new Badge("Paul", "Smith");
paul.render()


