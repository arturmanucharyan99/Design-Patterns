export interface Observer {
    username: string;
    sendNotification(message: string): void;
}