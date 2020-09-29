const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'Igor Gonçalves',
        avatar: 'https://avatars3.githubusercontent.com/u/23505851?s=460&u=8c075d0432c431f5e44313b8dc01a3b245eda3b7&v=4',
        whatsapp: '21972973510',
        bio: 'Mussum Ipsum, cacilds vidis litro abertis. <br><br> Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Quem num gosta di mim que vai caçá sua turmis! A ordem dos tratores não altera o pão duris. Quem manda na minha terra sou euzis!'
    }

    classValue = {
        subject: 1, 
        cost: "40"
        // o profyId virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a aula
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // se a pessoa trabalha nesse horário, o horário do time_from é 8h, precisa ser menor ou igual ao horário solicitado
    // o Time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1220"
    `)

    console.log(selectClassesSchedules)


})