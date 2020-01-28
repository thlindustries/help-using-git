# Comandos para uso básico do git via terminal

### **Boas práticas sobre commits:**

- **chore**: expansão de algum detalhe .
- **fix**: correção de bugs .
- **feature**: nova funcionalidade .
- **add**: adicionando coisas novas .

> ***É esperado que os commits sejam criados após a finalização de uma nova funcionalidade/fix .(Evitar commits desnecessários) .***
>> ***Após a finalização do desenvolvimento na branch é necessário criar um pull request lá no git e depois dar um merge pull request .(Isso facilita a documentação e o backup caso necessário) .***


### **Fluxos no git:** 
> Fluxo para reverter um pull request da master .
>+ **Pull requests** --> **Closed** --> **Revert**

> Fluxo para juntar branchs e deletar a branch antiga . 
>+ **Create pull request** --> **Merge pull request** --> **Delete branch** 


### **Comandos terminal úteis:**

>+ **Cria uma pasta no diretório atual .**
>   - *mkdir nomePasta*
>+ **Entra no diretório descrito .**
>   - *cd nomeDiretorio*
>+ **Cria um arquvio no diretório atual .**
>   - *touch nomearquivo*
>+ **Lista os arquivos do diretório atual .**
>   - *ls*
>+ **Remove uma pasta (para remover pastas é >necessário o '-r') .**
>   - *rm nomePasta -r*
>+ **Remove um arquivo. (Para arquivos não é >necessário a adição do '-r') .**
>   - *rm nomearquivo*
>+ **Move uma pasta de um diretório a outro .**
>   - *mv nomeDiretorio nomeNovoDiretorio*


### **Comandos git úteis:**

>+ **Vincular o repositório do git com o remote .**
>   - *git remote add orign https:github.com/profile/repo.git*
>+ **Sincroniza seu diretório atual com os arquivos do repositório do git .**
>   - *git fetch*
>+ **Adicionar arquivos a serem enviados pro repositório .**
>   - *git add . *
>+ **Adicionar arquivos a serem enviados pro repositório .**
>   - *git add -A *
>+ **Realizar o commit dos arquivos adicionados ao repo .('Um ponto na história do projeto') .**
>   - *git commit -m 'mensagem' *
>+ **Enviar o que está no commit para uma branch do projeto. (-u serve para falar que a branchName será a default do projeto, logo nao precisa mais de *git push origin master* apenas *git push*) .**
>   - *git push origin branchName*
>+ **Baixar a branch .**
>   - *git pull origin branchName *
>+ **Entra em uma branch .**
>   - *git checkout branchName*
>+ **Cria e entra em uma branch .**
>   - *git checkout -b branchName*
>+ **Cria uma branch cópia da branch pai e entra na branch .**
>   - *git checkout -b branchFilho branchPai*
>+ **Deleta a branch do remote .**
>   - *git branch -d branchName*
>+ **Reflete tudo que existe na branchName dentro da branch atual .**
>   - *git merge branchName*
>+ **Troca a url do repositório .**
>   - *git remote set-url origin git@github.com:thlindustries/aulas-rocket-seat.git*
>+ **Verifica a URL do remote .**
>   - *git remote -v*
>+ **Aprendendo a usar ... !**
>   - *git rebase*
>+ **Mostra o histórico de commits .**
>   - *git log*


## Bonus:
#### Servidor básico node para praticar configurações do git.
- Dentro da pasta /arquivos_de_teste existe um mini servidor node para testar a utilização de rotas.
- Dentro da pasta use o [npm](https://www.npmjs.com/) para instalar as dependências.


```bash
cd /aula-git/arquivos_de_teste
npm install
npm start
```

- ## Acessar a aplicação:
- Para acessar a aplicação basta entrar no endereço:
[localhost:3000](http://localhost:1234)


