//-----------------------------------------------------------------------------
// Copyright (c) 2012 GarageGames, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//-----------------------------------------------------------------------------

singleton TSShapeConstructor(SoldierDAE)
{
   baseShape = "./soldier_rigged.DAE";
   loadLights = "0";
   unit = "1.0";
   upAxis = "DEFAULT";
   lodType = "TrailingNumber";
   ignoreNodeScale = "0";
   adjustCenter = "0";
   adjustFloor = "0";
   forceUpdateMaterials = "0";
};

function SoldierDAE::onLoad(%this)
{
   %this.addSequence("./Anims/PlayerAnim_Lurker_Back.dae Back", "Back", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Celebrate_01.dae Celebrate_01", "Celebrate_01", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Crouch_Backward.dae Crouch_Backward", "Crouch_Backward", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Crouch_Forward.dae Crouch_Forward", "Crouch_Forward", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Crouch_Side.dae Crouch_Side", "Crouch_Side", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Crouch_Root.dae Crouch_Root", "Crouch_Root", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Death1.dae Death1", "Death1", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Death2.dae Death2", "Death2", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Fall.dae Fall", "Fall", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Head.dae Head", "Head", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Jump.dae Jump", "Jump", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Land.dae Land", "Land", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Look.dae Look", "Look", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Reload.dae Reload", "Reload", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Root.dae Root", "Root", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Run.dae Run", "Run", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Side.dae Side", "Side", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Sitting.dae Sitting", "Sitting", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Swim_Backward.dae Swim_Backward", "Swim_Backward", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Swim_Forward.dae Swim_Forward", "Swim_Forward", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Swim_Root.dae Swim_Root", "Swim_Root", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Swim_Left.dae Swim_Left", "Swim_Left", "0", "-1", "1", "0");
   %this.addSequence("./Anims/PlayerAnim_Lurker_Swim_Right.dae Swim_Right", "Swim_Right", "0", "-1", "1", "0");
   %this.setSequenceBlend("Head", "1", "Root", "0");
   %this.setSequenceBlend("Look", "1", "Root", "0");
   %this.setSequenceBlend("Reload", "1", "Root", "0");
   %this.setSequenceGroundSpeed("Back", "0 -3.6 0", "0 0 0");
   %this.setSequenceGroundSpeed("Run", "0 5 0", "0 0 0");
   %this.setSequenceGroundSpeed("Side", "-3.6 0 0", "0 0 0");
   %this.setSequenceGroundSpeed("Swim_Backward", "0 -1 0", "0 0 0");
   %this.setSequenceGroundSpeed("Swim_Forward", "0 1 0", "0 0 0");
   %this.setSequenceGroundSpeed("Swim_Left", "-1 0 0", "0 0 0");
   %this.setSequenceGroundSpeed("Swim_Right", "1 0 0", "0 0 0");
   %this.setSequenceGroundSpeed("Crouch_Backward", "0 -2 0", "0 0 0");
   %this.setSequenceGroundSpeed("Crouch_Forward", "0 2 0", "0 0 0");
   %this.setSequenceGroundSpeed("Crouch_Side", "1 0 0", "0 0 0");
   %this.addTrigger("Back", "4", "1");
   %this.addTrigger("Back", "13", "2");
   %this.addTrigger("jump", "6", "1");
   %this.addTrigger("Land", "5", "1");
   %this.addTrigger("Run", "8", "1");
   %this.addTrigger("Run", "16", "2");
   %this.addTrigger("Crouch_Backward", "8", "1");
   %this.addTrigger("Crouch_Backward", "19", "2");
   %this.addTrigger("Crouch_Forward", "12", "1");
   %this.addTrigger("Crouch_Forward", "24", "2");
   %this.addTrigger("Crouch_Side", "16", "1");
   %this.addTrigger("Crouch_Side", "23", "2");
   %this.addTrigger("Side", "7", "1");
   %this.addTrigger("Side", "17", "2");
}
