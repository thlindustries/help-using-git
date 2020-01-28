# Comandos para uso básico do git via terminal
```bash
__________________Boas práticas sobre commits:__________________

'chore: expansão de algum detalhe'
'fix: correção de bugs'
'feature: nova funcionalidade'
'add: adicionando coisas novas'

!! É esperado que os commits sejam criados após a finalização de uma nova funcionalidade/fix .(Evitar commits desnecessários)

!! Após a finalização do desenvolvimento na branch é necessário criar um pull request lá no git e depois dar um merge pull request .(Isso facilita a documentação e o backup caso necessário)


############ Fluxos no git
|
|-----> Pull requests --> Closed --> Revert  ## Fluxo para reverter um pull request da master .

|
|-----> Create pull request --> Merge pull request --> Delete branch  ## Fluxo para juntar branchs e deletar a branch antiga . 


_____________________Comandos terminal úteis:__________________

mkdir nomePasta    ## Cria uma pasta no diretório atual .
cd nomeDiretorio    ## Entra no diretório descrito.
touch nomearquivo    ## Cria um arquvio no diretório atual.

ls    ## Lista os arquivos do diretório atual.
rm nomePasta -r    ## Remove uma pasta (para remover pastas é necessário o '-r')
mv nomeDiretorio nomeNovoDiretorio    ## Move uma pasta de um diretório a outro.
rm nomearquivo    ## Remove um arquivo. (Para arquivos não é necessário a adição do '-r')



______________________Comandos git úteis:______________________

git remote add orign https:github.com/profile/repo.git    ## Vincular o repositório do git com o remote .
git fetch     ## Sincroniza seu diretório atual com os arquivos do repositório do git .

git add .    ## Adicionar arquivos a serem enviados pro repositório .
git add -A   ##  Adicionar arquivos a serem enviados pro repositório .
git commit -m 'mensagem'    ## Realizar o commit dos arquivos adicionados ao repo .('Um ponto na história do projeto')

git push origin branchName     ## Enviar o que está no commit para uma branch do projeto. (-u serve para falar que a branchName será a default do projeto, logo nao precisa mais de *git push origin master* apenas *git push*)
git pull origin branchName    ## Baixar a branch . 

git checkout branchName     ## Entra em uma branch .
git checkout -b branchName  ## Cria e entra em uma branch .
git checkout -b branchFilho branchPai   ## Cria uma branch cópia da branch pai e entra na branch .
git branch -d branchName    ## Deleta a branch do remote .
git merge branchName      ## Reflete tudo que existe na branchName dentro da branch atual. 

git remote set-url origin git@github.com:thlindustries/aulas-rocket-seat.git   ## Troca a url do repositório .
git remote -v    ## Verifica a URL do remote .

git rebase (Aprendendo a usar ... !) .
```

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


