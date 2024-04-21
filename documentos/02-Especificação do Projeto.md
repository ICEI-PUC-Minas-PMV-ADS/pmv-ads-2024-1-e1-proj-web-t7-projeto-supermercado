# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Consumidor buscando menor preço</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Buscar produtos/supermercados.
Comparar preços.
Buscar melhor localização.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Supermercados </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Supermercado cadastrado no site</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Postar produtos e promoções.
Editar perfil.
Ver avaliações.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Cliente            | desejo ver melhores preços e promoções  | para economizar dinheiro                     |
| Cliente                | desejo seguir os perfis de supermercados                       | para obter informações de promoções.   
| Cliente            | desejo poder criar listas de compras | para saber em qual supermercado a compra ficará mais barata   
| Supermercados            | desejo cadastrar meus produtos e promoções  | para vender mais  
| Supermercados            | desejo visitar perfis de outros supermercados  | para comparar com meus produtos 

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | A aplicação deve permitir o cadastro de usuários e login | ALTA
| RF-02 | A aplicação deve permitir ao usuário fazer o login da sua conta | ALTA
RF-03 | A aplicação deve permitir a busca de produtos | ALTA
RF-04 |A aplicação deve permitir a comparação de preços |ALTA
RF-05 |A aplicação deve permitir que o usuário crie listas de compras | BAIXA
RF-06 |A aplicação deve permitir a notificação de ofertas | MÉDIA | 
RF-07 | A aplicação deve permitir filtrar sua busca por localização | MÉDIA
RF-08 |A aplicação deve permitir que usuários avaliem e deixem comentários | BAIXA
RF-09 | Permitir que o usuário escolha na página inicial entre ver ofertas e cadastrar supermercado | ALTA
RF-10 | Permitir que donos de supermercados  se cadastrem no aplicativo para promover seus estabelecimentos | ALTA
RF-11 | Permitir que os donos de supermercados  adicionem, editem e excluam ofertas e promoções | MÉDIA
RF-12 | Permitir que o usuário filtre sua busca por categoria | MÉDIA
RF-13 | Permitir que o usuário filtre sua busca por nome de supermercado | MÉDIA


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
RNF-01 | A aplicação deverá ter um desempenho bom, garantindo a que o aplicativo seja responsivo e rápido, mesmo quando houver períodos de pico de uso | ALTA
RNF- 02 | A aplicação deverá ter uma segurança robusta para a proteção de dados de usuários | ALTA
RNF-03 |A aplicação deverá projetar uma interface intuitiva e de fácil manuseio | MÉDIA
RNF-04 | Garantir que o aplicativo tenha compatibilidade com diferentes dispositivos móveis | ALTA
RNF-05 | Compatibilidade com navegadores: O site deve ser compatível com os principais navegadores web, como Chrome, Firefox, Safari e Edge | ALTA
RNF-06 | Estrutura modular: O site deve ter uma estrutura modular, permitindo que novas funcionalidades sejam facilmente adicionadas | MÉDIA



**Prioridade: Alta / Média / Baixa. 

### Regras de negócio ###

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
RN-01 | definir limite de itens em promoção por usiário | ALTA
RN- 02 | compra de itens especificos permitida para maiores de 18 anos. | ALTA
RN-03 |Definir data de início e fim das promoções | ALTA


**Prioridade: Alta / Média / Baixa.

### Regras de gestão ###

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
RG-01 | Realizar pesquisas de satisfação regulares junto aos usuários para entender suas necessidades e expectativas, buscando sempre melhorar a qualidade do serviço oferecido | ALTA
RG- 02 | Estabelecer parcerias com influenciadores digitais ou blogueiros especializados em compras para promover a plataforma e atrair novos usuários | MÉDIA
RG-03 | Estabelecer políticas claras de privacidade e proteção de dados, garantindo a conformidade com as regulamentações de proteção de dados pessoais vigentes em cada região onde a plataforma estiver operando | ALTA




**Prioridade: Alta / Média / Baixa.

