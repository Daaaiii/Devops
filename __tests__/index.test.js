/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

let rawHtml;

describe('index.html — estrutura da página', () => {
  beforeAll(() => {
    rawHtml = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    document.documentElement.innerHTML = rawHtml;
  });

  test('título da página é "DevOps na Prática"', () => {
    expect(document.title).toBe('DevOps na Prática');
  });

  // lang fica no atributo da tag <html>, não no innerHTML — verificamos no HTML bruto
  test('atributo lang está definido como pt-BR', () => {
    expect(rawHtml).toContain('lang="pt-BR"');
  });

  test('meta charset está definido como UTF-8', () => {
    const meta = document.querySelector('meta[charset]');
    expect(meta).not.toBeNull();
    expect(meta.getAttribute('charset').toUpperCase()).toBe('UTF-8');
  });

  test('meta viewport está presente', () => {
    const meta = document.querySelector('meta[name="viewport"]');
    expect(meta).not.toBeNull();
  });
});

describe('index.html — elementos obrigatórios', () => {
  test('elemento <header> existe', () => {
    expect(document.querySelector('header')).not.toBeNull();
  });

  test('elemento <footer> existe', () => {
    expect(document.querySelector('footer')).not.toBeNull();
  });

  test('elemento <h1> existe no header', () => {
    const h1 = document.querySelector('header h1');
    expect(h1).not.toBeNull();
  });

  test('<h1> contém o texto "DevOps na Prática"', () => {
    const h1 = document.querySelector('header h1');
    expect(h1.textContent).toContain('DevOps na Prática');
  });

  test('div.container existe', () => {
    expect(document.querySelector('.container')).not.toBeNull();
  });

  test('<h2> de boas-vindas está presente', () => {
    const h2 = document.querySelector('h2');
    expect(h2).not.toBeNull();
    expect(h2.textContent).toContain('Bem-vindo');
  });
});

describe('index.html — conteúdo', () => {
  test('menciona Amazon S3', () => {
    expect(document.body.textContent).toContain('Amazon S3');
  });

  test('menciona GitHub Actions', () => {
    expect(document.body.textContent).toContain('GitHub Actions');
  });

  test('menciona integração contínua (CI)', () => {
    expect(document.body.textContent.toLowerCase()).toContain('integração contínua');
  });

  test('footer contém copyright', () => {
    const footer = document.querySelector('footer');
    expect(footer.textContent).toContain('DevOps na Prática');
  });
});

describe('index.html — acessibilidade e boas práticas', () => {
  test('imagens com src vazio não existem', () => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const imgsSemSrc = imgs.filter(img => !img.getAttribute('src'));
    expect(imgsSemSrc).toHaveLength(0);
  });

  test('não há IDs duplicados', () => {
    const ids = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
    const unicos = new Set(ids);
    expect(ids.length).toBe(unicos.size);
  });

  test('elemento <html> está presente', () => {
    expect(document.querySelector('html')).not.toBeNull();
  });

  test('elemento <head> está presente', () => {
    expect(document.querySelector('head')).not.toBeNull();
  });

  test('elemento <body> está presente', () => {
    expect(document.querySelector('body')).not.toBeNull();
  });
});
