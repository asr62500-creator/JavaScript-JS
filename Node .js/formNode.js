const http = require('http');

const querystring = require('querystring');

const server = http.createServer((req, res) => {

    if(req.method === 'POST'){

        let body = '';

        // Receive data chunks
        req.on('data', chunk => {

            body += chunk.toString();

        });

        // When complete data is received
        req.on('end', () => {

            // Convert query string into object
            const data = querystring.parse(body);

            // Extract values
            const rno = data.rno;

            const name = data.name;

            const m1 = parseInt(data.m1);

            const m2 = parseInt(data.m2);

            const m3 = parseInt(data.m3);

            const m4 = parseInt(data.m4);

            // Calculate total
            const total = m1 + m2 + m3 + m4;

            // Print on server console
            console.log("Roll No:", rno);

            console.log("Name:", name);

            console.log("Total Marks:", total);

            // Send response to browser
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(`<h2>Student Details</h2>`);

            res.write(`<p>Roll No: ${rno}</p>`);

            res.write(`<p>Name: ${name}</p>`);

            res.write(`<p>Subject 1 Marks: ${m1}</p>`);

            res.write(`<p>Subject 2 Marks: ${m2}</p>`);

            res.write(`<p>Subject 3 Marks: ${m3}</p>`);

            res.write(`<p>Subject 4 Marks: ${m4}</p>`);

            res.write(`<h3>Total Marks = ${total}</h3>`);

            res.end();

        });

    }

    else{

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end("Server Running...");
    }

});

server.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});