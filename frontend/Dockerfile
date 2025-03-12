
# Use a imagem do Node.js
FROM node:18 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Construir o frontend para produção
RUN npm run build

# Servir os arquivos da build com Nginx
FROM nginx:alpine

# Copiar os arquivos de build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 (padrão para Nginx)
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]