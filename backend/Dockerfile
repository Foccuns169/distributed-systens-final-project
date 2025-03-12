# Usando a imagem do Node.js
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta do backend (por padrão, a porta 4000)
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
