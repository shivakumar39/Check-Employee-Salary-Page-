    var createTags = () => {
        var h2 = $('<h2></h2>').text('Employee Details');    
        $('body').append(h2);
        var ul = $('<ul></ul>');

        var li0 = $('<li>').text('Name : ');
        var li1 = $('<li>Age : </li>');
        var li2 = $('<li>Dept : </li>');
        var li3 = $('<li>location : </li>');
        var li4 = $('<li>basic salary : </li>');
        var li5 = $('<li></li>');
        ul.append(li0 , li1 , li2 , li3 , li4 , li5); // all li are append at a time....

        var span = $( "<span></span>" ).appendTo(li0);
        var span1 = $( "<span></span>" ).appendTo(li1);
        var span2 = $( "<span></span>" ).appendTo(li2);
        var span3 = $( "<span></span>" ).appendTo(li3);
        var span4 = $( "<span></span>" ).appendTo(li4);

        $('<input>').attr('id' , 'eName').appendTo(span);
        $('<input>').attr('id' , 'eAge').appendTo(span1);
        var select = $('<select>').attr('id' , 'eDept').appendTo(span2);
        var option = $('<option>');
        var option0 = $('<option>').text('IT');
        var option1 = $('<option>').text('analyst');
        var option2 = $('<option>').text('developer');
        var option3 = $('<option>').text('tester');
        $(select).append(option , option0 ,  option1 , option2 , option3); // all options are append at a time....

        var select1 = $('<select>').attr('id' , 'eLoc').appendTo(span3);
        var optionn = $('<option>');
        var optionn0 = $('<option>').text('Hyderabad');
        var optionn1 = $('<option>').text('chennai');
        var optionn2 = $('<option>').text('mumbai');
        var optionn3 = $('<option>').text('kolkata');
        $(select1).append(optionn , optionn0 , optionn1 , optionn2 , optionn3); // all appended at a time.....
        $('<input>').attr('id' , 'eBsal').appendTo(span4);
        $('<input>').appendTo(li5);


        var content = () => {
            var createTable = '<table><thead><tr><th>Name</th><th>Age</th><th>Dept</th><th>Loc</th><th>Bsal</th><th>pf</th><th>hra</th><th>tsal</th><th>tax to pay</th></tr></thead></table>';
            return createTable;
        }
        var content1 = () => {
            var read = '<tbody><tr><td><td><td><td><td><td><td><td><td>';
            return read;
        }

        $('<div>').appendTo('body');
        $('<img>').appendTo('div');
        


        $('body').append(ul);
        $('body').append(content());
        $('table').append(content1());
        tagStylesAttributes();
    }
    var tagStylesAttributes = () => {
        $('h2').css({
            textAlign: 'center',
            background: 'gray',
            lineHeight: '40px',
        });
        $('ul').css({
            background: '#efecec',
            border: '1px solid',
            width: '500px',
            margin: '3% 28%',
            padding: '5px',
        });
        $('ul > li').css({
            listStyle: 'none',
            border: '1px solid #000',
            margin: '5px',
            padding: '5px',
        });
        $('span').css({
            position: 'absolute',
            left: '42%',
        });
        $('input').attr('type' , 'text');
        $('input:eq(1)').attr({
            type: 'number',
            min: '10',
            max: '100',
        });
        $('input:eq(3)').attr({
            type: 'submit',
            value: 'generate',
            onclick: 'manipulate()',          
        });
        $('li:eq(5)').css({
            textAlign: 'center',
            border: '1px solid #ccc',
        });
        $('table , tbody , thead , tr , th , td').css({
            border: '1px solid',
            borderCollapse: 'collapse',
            marginLeft: '20%',
            padding: '14px',
        });
        $('table').css({
            marginTop: '20%',
        })
        $('img').attr({
            src: 'https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif',
        });
        $('div').css({
            marginLeft: '28%',
        });
        tableAttr();
    }
    var tableAttr = () => {
        $('td:eq(0)').attr('id' , 'eeName');
        $('td:eq(1)').attr('id' , 'eeAge');
        $('td:eq(2)').attr('id' , 'eeDept');
        $('td:eq(3)').attr('id' , 'eeLoc');
        $('td:eq(4)').attr('id' , 'eeBsal');
        $('td:eq(5)').attr('id' , 'eePf');
        $('td:eq(6)').attr('id' , 'eeHra');
        $('td:eq(7)').attr('id' , 'eeTotal');
        $('td:eq(8)').attr('id' , 'eeTax');          
        readValues();
    }    
    var readValues = () => {
        var name = $('#eName').val();
        var age = $('#eAge').val();
        var age = parseInt(age);
        var dept = $('#eDept').val();
        var loc = $('#eLoc').val();  

        calSalaryDetails();  // function calling........

        $('#eeName').html(name);
        $('#eeAge').html(age);
        $('#eeDept').html(dept);
        $('#eeLoc').html(loc);
    }

    var calSalaryDetails = () => {
            var basicsal = $('#eBsal').val();
            var basicsal = parseFloat(basicsal);
            var pf = 12 / 100 * basicsal;
            var hra = 15 / 100 * basicsal;
            var totalsal = pf + hra + basicsal;
            $('#eeBsal').html(basicsal);
            $('#eePf').html(pf);
            $('#eeHra').html(hra);
            $('#eeTotal').html(totalsal);

        // tax calculation...

            if(totalsal > 200000) {
                var tax = 10 / 100 * totalsal;
            } else if(totalsal > 100000) {
                var tax = 8 / 100 * totalsal;
            } else if(totalsal > 70000) {
                var tax = 5 / 100 * totalsal;
            } else {
                var tax = 0;
            }
            $('#eeTax').html(tax);
             
            
        }                     
createTags();
$('div').hide();
$('table').hide();
var manipulate = () => {
    $('ul').hide();
    $('div').show();
    readValues();
    timeSet();
}
function timeSet() {
    setTimeout(function() {
        $('div').hide();
        $('table').show();
    }, 3000);
}








