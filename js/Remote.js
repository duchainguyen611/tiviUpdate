class Remote {
    constructor(){
        this.currentCode = 0;
        this.code = 
        [[1,2,3],
        [4,5,6],
        [7,8,9]];
    }

    connectTivi(tivi){
        if(tivi.status){
            this.tivi = tivi;
        }
    }

    disconnectTivi(tivi){
        tivi.status=false;
    }

    changeRightChanel(){
        if(this.currentCode<8){
            this.currentCode++;
            this.tivi.setChanel(this.currentCode);
            this.tivi.setContent(this.currentCode);
        }
        else{
            this.currentCode=0;
            this.tivi.setChanel(this.currentCode);
            this.tivi.setContent(this.currentCode);
        } 
    }

    changeLeftChanel(){
        if(this.currentCode>0){
            this.currentCode--;
            this.tivi.setChanel(this.currentCode);
            this.tivi.setContent(this.currentCode);
        }
        else{
            this.currentCode=8;
            this.tivi.setChanel(this.currentCode);
            this.tivi.setContent(this.currentCode);
        }
    }

    display(){
        let html = '<table>';
        html += '<tr>'
        html += '<td>';
        html += '<button onclick="turnOffTivi()">Off'
        html += '</td>';
        html += '<td>'
        html += '</td>'
        html += '<td>';
        html += '<button onclick="turnOnTivi()">On';
        html += '</button>'
        html += '</td>';

        this.code.forEach((element, i) => {
            html += '<tr>';
            for(const value of element){
                html+= '<td>'
                html+= '<button onclick ="remote.changeChanel('+(value-1)+')">';
                html+= value;
                html+= '</button>';
                html+= '</td>';
            }
            html += '</tr>';
        });
        html += '<tr>';
        html += '<td><button onclick="upVolumn()">▲</button></td>';
        html += '<td></td>';
        html += '<td><button onclick="rightChanel()">►</button></td>';
        html += '</tr>';
        html += '<tr>';
        html += '<td><button onclick="downVolumn()">▼</button></td>';
        html += '<td></td>';
        html += '<td><button onclick="leftChanel()">◄</button></td>';
        html += '</tr>';
        html += '</table>';
        document.getElementById('remote').innerHTML = html;
    }

    changeChanel(key){
        this.tivi.setChanel(key);
        this.tivi.setContent(key);
    }
}
