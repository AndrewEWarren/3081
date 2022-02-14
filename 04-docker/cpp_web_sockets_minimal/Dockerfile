FROM ubuntu:18.04 as builder
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    cmake \
    libssl-dev \
    zlib1g-dev
RUN mkdir -p /app
RUN git clone https://github.com/dtorban/CppWebServer.git /app/CppWebServer
RUN mkdir -p /app/CppWebServer/build
WORKDIR /app/CppWebServer/build
RUN cmake ..
RUN make -j


FROM ubuntu:18.04 as app
COPY --from=builder /usr/lib/x86_64-linux-gnu/libssl.so.1.1 /usr/lib/x86_64-linux-gnu/libssl.so.1.1
COPY --from=builder /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1 /usr/lib/x86_64-linux-gnu/libcrypto.so.1.1
COPY --from=builder /app /app
WORKDIR /app/CppWebServer
EXPOSE 8081
