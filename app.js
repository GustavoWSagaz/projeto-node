const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


app.use(express.static('public'));


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Café Artesanal em Grãos', descricao: 'Este café artesanal é produzido com grãos 100% arábica, provenientes de pequenas quintas selecionadas. Cada lote é torrado com precisão para garantir um sabor rico e equilibrado, com notas subtis de chocolate e frutos secos. Ideal para os amantes de café que apreciam uma bebida de qualidade superior e de produção sustentável.' },
        { id: 2, nome: 'Vela Aromática de Cera de Soja', descricao: 'A nossa vela aromática é feita à mão com cera de soja natural e óleos essenciais puros. Disponível em fragrâncias calmantes como lavanda, baunilha e eucalipto, esta vela cria um ambiente relaxante e acolhedor em qualquer espaço. Além disso, é ecológica e livre de toxinas, garantindo uma experiência de bem-estar completa.' },
        { id: 3, nome: 'Mochila Minimalista em Couro Vegano', descricao: 'Moderna e prática, esta mochila minimalista é fabricada com couro vegano de alta qualidade, combinando durabilidade e estilo. O seu design simples e elegante faz dela a escolha perfeita para o dia a dia, seja para o trabalho, viagens ou lazer. Com compartimentos organizados, é uma opção sustentável e funcional para quem valoriza a moda consciente.' }
    ];
    res.render('home', { produtos });
});


app.get('/produto/:id', (req, res) => {
    const produtos = [
        { id: 1, nome: 'Café Artesanal em Grãos', descricao: 'Este café artesanal é produzido com grãos 100% arábica, provenientes de pequenas quintas selecionadas. Cada lote é torrado com precisão para garantir um sabor rico e equilibrado, com notas subtis de chocolate e frutos secos. Ideal para os amantes de café que apreciam uma bebida de qualidade superior e de produção sustentável.' },
        { id: 2, nome: 'Vela Aromática de Cera de Soja', descricao: 'A nossa vela aromática é feita à mão com cera de soja natural e óleos essenciais puros. Disponível em fragrâncias calmantes como lavanda, baunilha e eucalipto, esta vela cria um ambiente relaxante e acolhedor em qualquer espaço. Além disso, é ecológica e livre de toxinas, garantindo uma experiência de bem-estar completa.' },
        { id: 3, nome: 'Mochila Minimalista em Couro Vegano', descricao: 'Moderna e prática, esta mochila minimalista é fabricada com couro vegano de alta qualidade, combinando durabilidade e estilo. O seu design simples e elegante faz dela a escolha perfeita para o dia a dia, seja para o trabalho, viagens ou lazer. Com compartimentos organizados, é uma opção sustentável e funcional para quem valoriza a moda consciente.' }
    ];
    const produto = produtos.find(p => p.id == req.params.id);
    if (produto) {
        res.render('produto', { produto });
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
