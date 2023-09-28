namespace CoinCollection.Core {
   /// <summary>
   /// The ModuleDefinition is linked to the ModuleDefinition.module file.
   /// This is the underlying code for the ModuleDefinition module.
   /// </summary>
   public interface IModuleDefinition {
      /// <summary>
      /// This is our create function. It's pointed to, by name, via a field defined in
      /// the ModuleDefinition.module file, which contains our module definition. It is called
      /// when the module is initially loaded by the engine. Generally, only common, base-level
      /// stuff is created(or destroyed, in the companion function), like things utilized or
      /// shared on both the client and server, or things that need to be loaded before anything
      /// else.
      /// </summary>
      void OnCreate();

      /// <summary>
      /// Similar to the create function, this is defined in the module file, and called
      /// when the module is destroyed, usually as part of the game shutting down.
      /// </summary>
      void OnDestroy();

      /// <summary>
      /// This is called when the server part of the application is initially created. Torque3D
      /// assumes, even in a single player context, that there is ultimately a 'server' and a 'client'
      /// So during initial launch and startup of the engine, the server side is initialized in
      /// core/clientServer/scripts/server/server.ts - in the initServer() function where this is called.
      /// This is called on all modules that have this function defined. This is important for
      /// any persistant parts of the server that always need to run such as gameplay scripts
      ///
      /// Importantly, when the game session server is created, several functions are called to as part of the gamemode logic
      /// The script below contains the callbacks so the gamemode can actually be set up, but the server-side callbacks in question:
      /// ModuleDefinition::onMissionStart
      /// ModuleDefinition::onMissionEnded
      /// ModuleDefinition::onMissionReset
      /// Are called during the startup, shut down, and resetting of any and all active gamemodes, as informed by the loaded scenes
      /// when the game server is processed.
      /// These callbacks are activated in core/clientServer/scripts/server/levelLoad.ts
      /// </summary>
      void InitServer();

      /// <summary>
      /// This is called when a game session server is actually created so the game may be played. It's called
      /// from core/clientServer/scripts/server/server.ts - in the createServer() function, which is called when
      /// A game session is actually launched, and the server is generated so game clients can connect to it.
      /// This is utilized to set up common things that need to be set up each time the game session server is
      /// created, such as common variables, datablocks to be transmitted to the client, etc.
      ///
      /// In particular, the default client/server module handles the transmission of datablocks from
      /// server to client automatically as part of the connection and prepping process alongside
      /// validation and tramission of level objects. It does this in an abstracted way by adding
      /// the file paths to a master DatablockFilesList array as per below. When the server is created in
      /// onServerCreated(), it loads the datablocks via this array, and when when the server goes
      /// to pass data to the client, it iterates over this list and processes it, ensuring all datablocks
      /// are the most up to date possible for transmission to the connecting client
      /// %this.registerDatablock("./datablocks/ExampleDatablock.tscript");
      /// </summary>
      void OnCreateGameServer();

      // In particular, the default client/server module handles the transmission of datablocks from
      // server to client automatically as part of the connection and prepping process alongside
      // validation and tramission of level objects. It does this in an abstracted way by adding
      // the file paths to a master DatablockFilesList array as per below. When the server is created in
      // onServerCreated(), it loads the datablocks via this array, and when when the server goes
      // to pass data to the client, it iterates over this list and processes it, ensuring all datablocks
      // are the most up to date possible for transmission to the connecting client
      // %this.registerDatablock("./datablocks/ExampleDatablock.tscript");

      /// <summary>
      /// This is called when a game session server is destroyed, when the game shuts down. It's called from
      /// core/clientServer/scripts/server/server.ts - in the destroyServer() function, which just cleans up anything
      /// The module may have set up as part of the game server being created.
      /// </summary>
      void OnDestroyGameServer();

      /// <summary>
      /// Similar to initServer, this is called during the initial launch of the application and the client component
      /// is set up. The difference is that the client may not actually be created, such as in the case for dedicated servers
      /// Where no UI or gameplay interface is required. It's called from core/clientServer/scripts/client/client.ts -
      /// in the initClient() function. It sets up common elements that the client will always need, such as scripts, GUIs
      /// and the like
      /// </summary>
      void InitClient();

      /// <summary>
      /// This is called when a game session client successfuly connects to a game server.
      /// It's called from core/clientServer/scripts/client/connectionToServer.ts - in the GameConnection::onConnectionAccepted() function
      /// It's used for any client-side specific game session stuff that the client needs to load or pass to the server, such as profile data
      /// account progress, preferences, etc.
      ///
      /// When a client is connected, the gamemode logic also has a callback activated - ModuleDefinition::onClientEnterGame().
      /// </summary>
      void OnCreateClientConnection();

      /// <summary>
      /// This is called when a client game session disconnects from a game server
      /// It's called from core/clientServer/scripts/client/connectionToServer.ts - in the disconnectedCleanup() function
      /// It's used to clean up and potentially write out any client-side stuff that needs housekeeping when disconnecting for any reason.
      /// It will be called if the connection is manually terminated, or lost due to any sort of connection issue.
      ///
      /// When a client disconnects, the gamemode logic has a callback activated - ModuleDefinition::onClientLeaveGame().
      /// </summary>
      void OnDestroyClientConnection();
   }
}
