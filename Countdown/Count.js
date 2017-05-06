    //Countdown
    //Höfundur: Jón Benediktsson
    //Dags: 5.5.2017


    var nuna = new Date();
    var time_length = 200;
    //maður getur breytt targetinu til að fá aðra tímasettningu
    var target = new Date("201444-05-07");
    var targethold = parseInt(target.getTime()/1000);
    
    var Sec = "";
    var Min = "";
    var Hou = "";
    var Dag = "";
    

    
    function Countdown()
    {
        
        var nuna = new Date();
        hold = nuna.getTime();
        hold = parseInt(hold/1000);
        hold = targethold - hold;
        
        
        
        //Sekúntur
        if ((hold%60)<10){
            Sec="0"+parseInt((hold%60).toString());
        }
        else{
            Sec=(hold%60).toString();
        }
        
        //Mínótur
        if (((hold/60)%60)<10){
            Min="0"+parseInt(((hold/60)%60).toString());
        }
        else{
            Min=parseInt((hold/60)%60).toString();
        }
        
        //Klukkutímar
        if (((hold/60/60)%24)<10){
            Hou="0"+parseInt(((hold/60/60)%24).toString());
        }
        else{
            Hou=parseInt((hold/60/60)%24).toString();
        }
        
        //Dagar
        if ((hold/60/60/24)<10){
            Dag="0"+parseInt((hold/60/60/24).toString());
        }
        else{
            Dag=parseInt(hold/60/60/24).toString();
        }
        
        
        
        
        document.getElementById("Dagarstat").innerHTML = Dag;
        window.setTimeout("Countdown()",time_length);
    }
    Countdown();
    
    