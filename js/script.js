//Caso houvesse o link da API, poderia ser obtido os dados com a função map
var Job = [{ "ID": 1, "Description": "Importação de arquivos de fundos", "MaxDate": "2019-11-10 12:00:00", "time": 2 }, { "ID": 2, "Description": "Importação de dados da Base Legada", "MaxDate": "2019-11-11 12:00:00", "time": 4 }, { "ID": 3, "Description": "Importação de dados de integração", "MaxDate": "2019-11-11 08:00:00", "time": 6 }]
    // Verificar no console se o array está sendo exibido corretamente
     console.log(Job[0]);
var array;
// Checar se todas as datas estão dentro do intervalo esperado.
// Data inicio
const dateStart = new Date(' 2019-11-10 08:00:00');
// Data final
const dateEnd = new Date('2019-11-11 12:00:00');
var count = 0;

for (i = 0; i < Job.length; i++) {
    var dateIndex = Job[i].MaxDate;
    console.log(Job[i].MaxDate)
    if (dateStart.getTime() <= new Date(Job[i].MaxDate).getTime() && dateEnd.getTime() >= new Date(Job[i].MaxDate).getTime()) {
        console.log('A data ', dateIndex, ' está contida dentro do período especificado');
    } else {
        console.log('A data ', Job[i].MaxDate, ' está fora do período especificado');
    }
}


console.log('Consultando array antes de ordenar');
for (i = 0; i < Job.length; i++) {
    console.log(Job[i].MaxDate, Job[i].ID);
}

//Ordenar array pela data
Job.sort(function(a, b) {
    var dateA = new Date(a.MaxDate),
        dateB = new Date(b.MaxDate);
    return dateA - dateB;
});


console.log('Consultando array depois de ordenar');
for (i = 0; i < Job.length; i++) {
    console.log(Job[i].MaxDate, Job[i].ID);
}


console.log('Imprimindo agenda');
  
document.write('[');
document.writeln('<br/>');
document.write('[');
for (i = 0; i < Job.length; i++) {
	
    count = count + Job[i].time;
	var print = Job[i].ID
	
	document.write(print);
	
	
    if (count == 8) {
	document.write('],');
		// Pular linha
        document.writeln('<br/>');
		document.write('[');
        count = 0;
    }
	else if(count == 2) {
	document.write(',');
		// bota virgula
       
       
    }
	
}
document.write(']');
document.writeln('<br/>');
document.write(']');