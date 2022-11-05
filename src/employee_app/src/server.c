

#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char **argv) {
    char buffer[512];
    int listen_fd, conn_fd;
    struct sockaddr_in servaddr;

    if(argc < 2) {
        fprintf(stderr, "usage: %s <port_number>\n", argv[0]);
        exit(1);
    }

    int portnum = atoi(argv[1]);

    /* AF_INET - IPv4 IP, TCP Socket, Protocol handled by OS */
    listen_fd = socket(AF_INET, SOCK_STREAM, 0);

    if(listen_fd == -1) {
        printf("Socket creation failed...");
        exit(0);
    }

    bzero(&servaddr, sizeof(servaddr));

    /* Setup servaddr attributes */
    servaddr.sin_family = AF_INET;
    servaddr.sin_addr.s_addr = htons(INADDR_ANY);
    servaddr.sin_port = htons(portnum);

    /* Binds the above details to the socket */
    if((bind(listen_fd, (struct sockaddr *) &servaddr, sizeof(servaddr))) != 0) {
        printf("Socket bind failed....\n");
        exit(0);
    }

    /* Listen to the incoming connections */
    if((listen(listen_fd, 10)) != 0) {
        printf("Listening failed...\n");
        exit(0);
    }

    while(1) {
        conn_fd = accept(listen_fd, (struct sockaddr *)NULL, NULL);
        printf("Listening\n");

        bzero(buffer, 512);
        read(conn_fd, buffer, 512);

       strcpy(buffer, "Hello world \n\r\0");
      write(conn_fd, buffer, strlen(buffer)); // write to the client
      close (conn_fd); //close the connection
    }


}
