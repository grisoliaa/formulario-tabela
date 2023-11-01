
        function addItem() {
            //Buscando valores do input
            var nome = document.getElementById("name-item").value
            var quantidade = document.getElementById("quantidade").value

            //Buscando o tbody da tabela
            var tabela = document.getElementById("tabela")

            //Criando a linha da tabela
            var tr = document.createElement("tr")
            
            //Criando a primeira célula
            var td1 = document.createElement("td")

            //Criando a segunda célula
            var td2 = document.createElement("td")
            
            //Adicionando texto a essa primeira célula
            td1.textContent = nome

            //Adicionando texto a segunda celula
            td2.textContent = quantidade
            
            //Adicionando a primeira célula a linha
            tr.appendChild(td1)

            //Adicionando a segunda célula a linha
            tr.appendChild(td2)
            
            //Adicionando a linha a tabela
            tabela.appendChild(tr)
        }
