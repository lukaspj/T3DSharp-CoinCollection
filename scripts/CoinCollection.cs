using CoinCollection.Client;
using CoinCollection.Core;
using T3DSharpFramework.Generated.Classes.Sim;
using T3DSharpFramework.Generated.Functions;
using T3DSharpFramework.Interop;

namespace CoinCollection {
   /// <summary>
   /// The CoinCollection ModuleDefinition is linked to the CoinCollection.module file.
   /// This is the underlying code for the CoinCollection module.
   /// </summary>
   [ConsoleClass]
   class CoinCollection : ModuleDefinition, IModuleDefinition {
      public void OnCreate() { }

      public void OnDestroy() { }

      public void InitServer() {
         // server initialization
      }

      public void OnCreateGameServer() {
         Call("registerDatablock", "./datablocks/Coin.tscript");
         Call("registerDatablock", "./datablocks/Particles.tscript");
         Call("registerDatablock", "./datablocks/Player.tscript");
      }

      public void OnDestroyGameServer() { }

      public void InitClient() {
         Call("queueExec", "./guis/customProfiles.tscript");
         Call("queueExec", "./guis/scoreboard.gui");
         ScoreBoardGUI.Init();
      }

      public void OnCreateClientConnection() {
         //client initialization

         CoinCollectionMoveMap.Init();
         Core.Objects.GlobalActionMap.Bind("keyboard", "tilde", "toggleConsole");

         string prefPath = Global.GetPrefsPath();
         if (Global.IsFile(prefPath + "/keybinds.tscript"))
            Global.Exec(prefPath + "/keybinds.tscript");
      }

      public void OnDestroyClientConnection() { }
   }
}
