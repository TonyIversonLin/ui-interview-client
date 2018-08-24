import * as socketCluster from 'socketcluster-client';

import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {

  /**
   * Your assignment is to extend this class to hydrate the data streams to the UI Components.
   */
  private sc: socketCluster.Socket = socketCluster.Socket;
  private channel: any;

  private options: any = {
    port: 8000
  };

  constructor() {

    this.sc = socketCluster.connect(this.options);

    this.sc.on('connect', function(status){
      console.log('STATUS: ' + JSON.stringify(status));
    });
    this.sc.on('error', function(data){
      console.log('ERROR - ' + JSON.stringify(data));
    });
    this.sc.on('disconnect', function(){
      console.log('DISCONNECTED');
    });
  }

  public subscribe(channelName: string): void {
    this.channel = this.sc.subscribe(channelName);

    this.channel.on('subscribeFail', (err, channel) => {
      console.log(`Failed to subscribe to channel ${channelName}`);
    });

    this.channel.on('subscribe', (channel) => {
      console.log(`Successfully subscribed to channel ${channelName}`);
    });

    this.channel.watch((data) => {
      console.log('Mock Data Received: ' + JSON.stringify(data));
    });

    // return an observable;
  }

  public unsubscribe(): void {
    this.channel.unsubscribe();
  }

}
