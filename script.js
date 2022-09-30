    const btnLogin = document.querySelector(".btn-login"); //pegando o valor do botão e passando para uma variavel

    const form = document.querySelector("form"); //pegando o form, por ter só um form eu posso pegar ele direto

    btnLogin.addEventListener("click", event => { //"addEventListerner é um carinha que vai "ouvir" eventos que acontecer com btnLogin, que o nome desse evendo se chama "click", e quando esse evento acontecer ele já irá realizar tudo que estiver dentro dessa FUNÇÃO, que se chama evendo, que foi declarada na mesma linha
        event.preventDefault(); //dizendo aqui para ee não fazer o submit(enviar) que era pra ser feito ao clicar no botao, fazendo que a pagina fique parada 


        const campos = [... document.querySelectorAll(".input-block input")]; /* neste [...  ] ele está desconstruindo os elementos para um ARRAY, pegando os elemento input's*/

        campos.forEach(campos => { /*para cada campo que ele passar ele irá fazer isso */
            if(campos.value === "") { /* se qualquer campo tiver valor vazio el irá adicionar uma classe chamada "validate-error" */
                form.classList.add("validate-error"); /*adicionando a classe que estará no CSS */
            }
        })

        const formError = document.querySelector(".validade-error"); /*pegando a classe validade error para ver se ela existe */
        if(formError){ /**se realmente existir o formError */
            formError.addEventListener("animationend", (event) =>{ /*irá adicionar um evento que quando chegar ao final da animação ele fará o "event" (event que é a função)*/
                if (event.animationName === "nono") /*e se caso evento for o "nono"*/
                formError.classList.remove("validate-error") /* ele irá remover a classe chamada "validate-error" */
            })
        }else{ /*caso não tenha nenhum erro ele irá prosseguir  */
            form.classList.add("form-hide"); //adicionando uma CLASSE para o form
        }

    })


    form.addEventListener("animationstart", event => { // fazer um evento para antes de começar a animação ele adicione um style no body, "animationstart" para o começo da animação, sendo "event" apenas um nome para a função

        if(event.animationName === "down") { //aqui ele está especificando qual animação 
            document.querySelector("body").style.overflow = "hidden"; // para tirar a barra de rolagem durante todo periodo inicial, tem que ser direto no body, ate parar o evento "down"
            }
        })




    form.addEventListener("animationend", event => { // fazer um evento para quando acabasse a animação ele excluisse o form, "animationend" para o final da animação, sendo "event" apenas um nome para a função

        if(event.animationName === "down") {//aqui ele está especificando qual animação 
            form.style.display = "none"; //dando um display none quando a aniamação do form acabar
            document.querySelector("body").style.overflow = "none"; //para caso queiramos que a página após a ação de excuir o form tenha uma barra de rolagem para biaxo, temos que tirar o overflor hidden
        }
    })

    //background squares

    const ulSquares = document.querySelector("ul.squares");
    
    for (let i = 0; i < 16; i++){ //para fazer os quadrados
        const li = document.createElement("li"); //criando elementos do tipo "li" que são os quadrados


        const random = (min, max) => Math.random() * (max-min) + min //fazendo essa variavel e essa função para simplificar o código


        
        // const size = Math.floor(Math.random() (120 - 10) * 10 )// math.floor irá arredondar os resultados gerados aleatoriamentes pelo math.random, e como ele gera numeros aleatorios de 0 a 1, fiz uma multiplicação



        const size = Math.floor(random(10, 150)); //numeros aleatorios para os tamanhos

        li.style.width = `${size}px`; //colocando em ${} o nome da variavel
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`; //feito issso para ele sumir da dela, fazendo ele menos a altura dele




        // const position = Math.random() * (99 - 1) + 1 //sendo 99% - 1% + 1 para dar os 100%
        const position = random(1, 99);

        li.style.left = `${position}%`;// posição na linha horizontal dos quadrados


        

        const delay = random(5, 0.1); //será aplicado esse valores em segundos

        li.style.animationDelay = `${delay}s`; /*deley do tempo de saida do quadrados */




        const duration = random(24, 12); //será o tempo de ida e descida dos quadrados

        li.style.animationDuration = `${duration}s`; /*deley do tempo de saida do quadrados */



        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`; //colocando um time diferente, sendo ele de 0 a 1, podendo passar de 1 ou não, então só colocar  4 rando's


        ulSquares.appendChild(li);
    }




