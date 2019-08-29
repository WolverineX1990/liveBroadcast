import * as http from 'http';
import Huya from './huya';

export default class Server {
    server= null
    id = 0
    constructor(id) {
        this.id = id;
        this.init();
    }

    init () {
        this.server = http.createServer(function (req, res) {
            var str = "";    
            req.on('data', function (data) {
                    str += data;   
            });
        
            req.on('end', function () { 
                
            });
        });

        let arr = [];
        for (let i = 0; i<10; i++) {
            let hy = new Huya(this.id);
            arr.push(hy);
        }
        
        this.server.listen(8080);
    }
}