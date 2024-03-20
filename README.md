# Deeper.js - JavaScript dokładniej (OO w JS)

```
npm test
```

## Prototypy

Programowanie obiektowe w JS bazuje na prototypach. Chociaż większość
ukrywa je w cukrze składniowym klas to prototypy ciąglę są pod maską.

```
prototypes_and_classes.test.js
```

Programistka uczy się języków programowania (`learnNewLanguage`). 
Programistka jest pragmatyczna gdy zna co najmniej 3 języki (`isPragmatic`).

Zaimplementuj programistkę z użyciem prototypów. Pamiętaj żeby usunąć `skip`
w pierwszym teście.

## Prototypy - model koncepcyjny

Wymagane elementy:
* funkcje - reprezentowane jako koła
* obiekty - reprezentowane jako kwadraty
* .prototype - relacja/strzałka
* `[[Prototype]]/__proto__`- relacja/strzałka
* .constructor - relacja/strzałka

Jak Object i Object.prototype wpasowują się w ten model?
Jak Function i Function.prototype wpasowują się w ten model?

## Klasy

Teraz przepisz prototypy na klasy.

```
prototypes_and_classes.test.js
```

Transpilator: https://buble.surge.sh/

## new

Zaimplementuj własny operator `new`.

```
new.test.js
```

Algorytm ma 4 kroki:
* stwórz nowy obiekt
* ustaw `__proto__`
* wywołaj funkcję konstruktora z thisem ustawionym na nowo stworzony obiekt w 1 kroku (`constructor.apply(newObject, args)`)
* zwróć nowo stworzony obiekt z kroku 1

Zacznijmy od 1 testu, który ma `skip`.

Jak zachowuje się operator `new` gdy zwracamy własny obiekt lub typ prosty? 

## instanceof

Teraz zaimplementuj własny operator `instanceof`.

```
instanceof.test.js
```

Podpowiedzi:
* musimy przejść łańcuch prototypów w poszukiwaniu odpowiedniej funkcji konstruktora
* przeszukiwanie łańcucha odbywa się przez `__proto__`

## 4 wiązania this

Wróćmy do `prototypes_and_classes.test.js` i nauczmy programistkę 3 języków na raz:

```js
["java", "c", "r"].forEach(programmer.learnNewLanguage, programmer);
```

Wiązanie `this` jest dynamiczne. Aby zrozumieć kod trzeba sprawdzić w jaki sposób jest wywołana funkcja. 
Mamy 4 rodzaje wiązania `this` które zobaczymy w 
```
thisBindingCharacterization.test.js
```

## bind

W poszukiwaniu przewidywalnego kodu część programistek tworzy funkcje z przewidywalnym `this`.
Z pomocą przychodzi `Function.prototype.bind`.

Zaimplementu własną funkcję `bind`
```
bind.test.js
```

## thiless

Jeżeli łapiesz się na tym, że musisz walczyć z językiem warto rozważyć podzbiór języka bez this, new, class itd.

Zaiplementuj programistę korzystając tylko z prostych funkcji i literałow obiektów.
```
thisless.test.js
```

Po skończonym ćwiczeniu wytłumaczymy pojęcia:
* local reasoning
* action at a distance
* rule of least powerful abstraction

## Zużycie pamięci

Na jaki kompromis idziemy używając podejścia thisless?

Wklaj kod z poprzedniego ćwiczenia do:
```
memoryUsage.js
```
