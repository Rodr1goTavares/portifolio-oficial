export class Tech_info{

    static show(): void{
        const buttons: Array<Element> = Array.from(document.querySelectorAll(".techs-icons"));
        let techText: HTMLElement | null = document.getElementById("tech-text");
  
        buttons.forEach(bt => {
            bt.addEventListener('click', () => {
                const tech = (bt as HTMLElement).dataset.tech;
  
                switch(tech){
                    case "java":
                        if (techText !== null) {
                            techText.innerHTML = `Java é a linguagem que eu estudo atualmente. Sempre estive só no javascript e typescript, porém, gostei muito e java e desejo fazer dela a minha linguagem principal.`;
                        }
                        break;
                    
                    case "node":
                        if (techText !== null) {
                            techText.innerHTML = `Já utilizei muito o node para criar bots para o discord. Com ele, eu tive um boa bagagem com consumo de APIs, sem contar o uso do npm, que é fundamental.`;
                        }
                        break;
                    
                    case "ts":
                        if (techText !== null) {
                        techText.innerHTML = `O Typescript foi a primeira vez que tive contato com tipagem estática, o ts me ajudou muito a aprender POO (Programação Orientda à Objetos) e serviu de porta de entrada para o Java.`;
                      }
                      break;
  
                    case "js":
                      if (techText !== null){
                        techText.innerHTML = `O Javascript foi a primeira linguagem que eu aprendi, foi com ela que eu adiquiri toda a base da programação. (Utilizei ela para fazer este site).`;
                      }
                      break;
  
                    case "html":
                      if (techText !== null){
                        techText.innerHTML = `É a ferramenta padrão do front end. já desenvolvi inúmeras páginas com ele.`;
                      }
                      break;
  
                    case "css":
                      if (techText !== null){
                        techText.innerHTML = `Também é outra ferramenta de suma importância para o desenvolvimento front-end e estilização, tenho muita bagaem com ela e com o html.`;
                      }
                      break;
  
                    case "sass":
                      if (techText !== null){
                        techText.innerHTML = `SCSS é uma ferramenta extremamente útil, pois adiciona várias funcionalides lógicas ao CSS.`;
                      }
                      break;
  
                    case "bootstrap":
                      if (techText !== null){
                        techText.innerHTML = `É um framework front-end extremamente útil e que agiliza bastante o desenvolvimento. Foi bastante útil na construção deste site.`;
                      }
                      break;
  
                    case "git":
                      if (techText !== null){
                        techText.innerHTML = `É uma ferramente de versionamento extremamente útil e que utilizo bastante. Caso queira acessar o meu github e ver alguns dos meus reposítórios, basta ir ao início desta página.`;
                      }
                      break;              
                }
            })
        })
    }
  }
  
  
        
