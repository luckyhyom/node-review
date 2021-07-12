// 서버와 클라이언트의 상호작용을 이해하고 나서 프로젝트가 조금 기대되기 시작했다.
// 클라이언트에게 받은 데이터를 가공하여 서버는 여러가지 서비스를 제공할 수 있다.

const http = require('http');

// 배열도 가능
// DB가 아닌 메모리에 데이터를 저장한다.
const obj = [{name:"hyomin",age:27},{name:"hyunah",age:29}];

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<div>hello</div>');

    if(req.url === '/json'){
        if(req.method === 'GET'){
            res.writeHead(200,{'Content-Type':'application/json'});
            // json보내는거 모름!!!! => JSON.sting
            res.end(JSON.stringify(obj));
        }else if( req.method === 'POST'){
            let body = [];
            req.on('data',(chunk)=>{
                body.push(chunk);
            })
            req.on('end',()=>{
                console.log(body);
                let result = Buffer.concat(body);
                console.log(result);
                let objStr = result.toString(); // 문자열이 된 버퍼
                let result2 = JSON.parse(objStr); // parse와 stringify의 차이.. ㅡㅡ
                obj.push(result2);
                res.writeHead(201);

                console.log(obj,'<<obj>>');
            })
            res.end();
        }
    }
});

server.listen(8080);