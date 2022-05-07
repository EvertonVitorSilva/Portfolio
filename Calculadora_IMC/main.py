nome = input('Digite seu nome por favor: ')

print('Olá {} como vai, espero que esteja bem.'.format(nome))
print('Eu sou o Alan, sou uma calculadora de IMC(índice de massa corporal), vamos começar!')

altura = float(input('Digite sua altura por favor: '))
peso = float(input('Agora digite seu peso: '))
print('Obrigado agora vou calcular para você')

IMC = round(peso / altura ** 2, 1)

if IMC <= 18.5:
    print('Seu IMC é de {} e esta abaixo do recomendado que é entre 18.6 e 24.9'.format(IMC))

elif IMC > 18.5 and IMC <= 24.9:
    print('Seu IMC é de {} e esta dentro do recomendado que é entre 18.6 e 24.9'.format(IMC))

elif IMC > 24.9 and IMC <= 29.9:
    print('Seu IMC é de {} e esta um pouco acima do recomendado que é entre 18.6 e 24.9'.format(IMC))

else:
    print('Seu IMC é de {} e esta muito acima do recomendado que é entre 18.5 e 24.9'.format(IMC))
