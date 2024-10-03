def classificar_jogador(vitorias, derrotas):
  """
  Classifica um jogador em um nível de acordo com seu saldo de vitórias.

  Args:
    vitorias: Número de vitórias do jogador.
    derrotas: Número de derrotas do jogador.

  Returns:
    Uma string representando o nível do jogador.
  """

  saldo = vitorias - derrotas

  if saldo < 10:
    nivel = "Ferro"
  elif 10 <= saldo <= 20:
    nivel = "Bronze"
  elif 21 <= saldo <= 50:
    nivel = "Prata"
  elif 51 <= saldo <= 80:
    nivel = "Ouro"
  elif 81 <= saldo <= 90:
    nivel = "Diamante"
  elif 91 <= saldo <= 100:
    nivel = "Lendário"
  else:  

    nivel = "Imortal"

  return nivel

# Exemplo de uso:
vitorias_jogador = int(input("Digite o número de vitórias: "))
derrotas_jogador = int(input("Digite o número de derrotas: "))

nivel_jogador = classificar_jogador(vitorias_jogador, derrotas_jogador)

print(f"O jogador tem um saldo de {vitorias_jogador - derrotas_jogador} e está no nível {nivel_jogador}.")
