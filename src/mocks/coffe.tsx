import Tradicional from '../assets/images/Coffee.svg'
import Americano from '../assets/images/expressAmericano.svg'
import Cremoso from '../assets/images/cremoso.svg'
import Gelado from '../assets/images/gelado.svg'
import Pingado from '../assets/images/comleite.svg'
import Latte from '../assets/images/latte.svg'
import Capuccino from '../assets/images/capuccino.svg'
import Macchiato from '../assets/images/macchiato.svg'
import Mocaccino from '../assets/images/mocaccino.svg'
import ChocoQunte from '../assets/images/chocoQuente.svg'
import Cubano from '../assets/images/cubano.svg'
import Havaiano from '../assets/images/havaiano.svg'
import Arabe from '../assets/images/arabe.svg'
import Irlandes from '../assets/images/irlandes.svg'

export const CoffeCard = [
  {
    id: 1,
    image: Tradicional,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    preço: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 2,
    image: Americano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    preço: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 3,
    image: Cremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    preço: '9,90',
    tag: ['TRADICIONAL'],
  },
  {
    id: 4,
    image: Gelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    preço: '8,90',
    tag: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 5,
    image: Pingado,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    preço: '10,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 6,
    image: Latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    preço: '10,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 7,
    image: Capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    preço: '10,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 8,
    image: Macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    preço: '10,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 9,
    image: Mocaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    preço: '10,90',
    tag: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 10,
    image: ChocoQunte,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    preço: '10,90',
    tag: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 11,
    image: Cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    preço: '12,90',
    tag: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
  },
  {
    id: 12,
    image: Havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    preço: '13,90',
    tag: ['ESPECIAL'],
  },
  {
    id: 13,
    image: Arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    preço: '24,90',
    tag: ['ESPECIAL'],
  },
  {
    id: 14,
    image: Irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    preço: '14,90',
    tag: ['ESPECIAL', 'ALCOÓLICO'],
  },
]
