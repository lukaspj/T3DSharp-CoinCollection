using CoinCollection.Core;
using T3DSharpFramework.Interop;

namespace CoinCollection.Client {
   public class ClientCommands {
      [ConsoleFunction]
      public static void ClientCmdShowVictory(int score) {
         Functions.MessageBoxOK(
            "You Win!",
            $"Congratulations you found {score} coins!",
            "disconnect();"
            );
      }
   }
}
