FROM python:3.10.0b1-alpine3.13

#RUN apk add python3
RUN apk add --no-cache openjdk8 
RUN apk add --update nodejs
RUN apk add build-base
RUN apk add ruby
#RUN apk add mono
ENV JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
ENV PATH="$JAVA_HOME/bin:${PATH}"


#COPY package-lock.json package-lock.json
#COPY package.json package.json

#RUN npm install

COPY jobber.py jobber.py

#COPY . .
#EXPOSE 9918
CMD ["python3","jobber.py"]


