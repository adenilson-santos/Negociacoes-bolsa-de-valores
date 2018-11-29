class DateConverter {

    constructor () {
        throw new Error("Essa classe não pode ser estanciada. Possui métodos staticos!");
    }

    static toDate(text){

        if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
            throw new Error('data em formatao errado, tente ano/mês/dia');

        return new Date(...
        text.split('-')
        .map((item,index)=> item - index % 2 ));
    }

    static toText(date){
        return `${(date.getDate() < 10 ) ? '0'+ date.getDate() : date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

}