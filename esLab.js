class DataBase{
    constructor(dbName='',server='',type=''){
        this.dbName = dbName;
        this.server = server;
        this.type = type;
    }

    connect()
    {
        if(this.dbName && this.server && this.type)
            return `Connection is scured as connecntion string in : Type=${this.type};Server=${this.server};DataBase=${this.dbName};Uid=;Pwd=;`
        else
            {
                if(!this.dbName) return 'Database Name is empty'

                else if(!this.server) return 'Server Name is empty'

                else if(!this.type) return 'Type Name is empty'
            } 
    }


}

class DbOPs extends DataBase{
    constructor(dbName='',server='',type=''){
        super(dbName,server,type)
    }

    createTable(tableName,...coloums)
    {
        console.log(tableName);

        let title = ''
        let values = ''
        for (const item of coloums) {
            title = `${title} | ${Object.keys(item)} |`
            values = `${values} | ${Object.values(item)} |`
        }

        console.log(title);
        console.log(values);

    }

    executeSP(spName,...params)
    {
        let result = `exec ${spName}`;

        for (const item of params) {
            result = `${result} ${item},`
        }

        console.log(result.slice(0, -1));
    }
}

let dbObj = new DataBase('Base','Server11','SQL Server');

console.log(dbObj.connect());

let obj1 = new DbOPs();

obj1.createTable('Employee',{Id:'1'},{designation:'Developer'},{department:'UWpro'});
obj1.executeSP('NightlyRunSP','12','Developer','IT');
