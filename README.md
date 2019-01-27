# Mafia Game
The mafia game is now online. Enjoy the game.

## Feature Planning :

Planning regarding the game needs to be done. Like what all will be the features that the user would want?

The features that I would want are unknown to me too. So let's start defining them here.

But what really is clear that

I want the god to play in the game.

Usual Features :

1) User enters the url into their browser.

2) Two options will be shown to him upon entering the website.

2.1) Create a room

2.2) Join a room

3) When creating a room : He has to set the rules for the game. He can also import from a template. There will be some defaults such as the max number of players. The usual ratio of mafias, healers, detective and villagers in the room settings. But it can be modified when creating a room. Thus a room should ideally have the following data structure of room

        room {
             id : String,
             name : String,
             total_size : int,
             min_player: int
             mafias : int,
             healers : int,
             detective : int,
             villagers : int,
             // custom_characters : [{
                 char_name: 'Priest',
                 char_role: 'REVIVE'
             }, {..}],
             players: [ {
                 player_id: id,
                 char_role: 'MAFIA'}, {..}
             ],
             role_time: int seconds,
             discussion_time: int seconds,
             discussion_vote_time: int seconds
        }

A room should thus be accessible by the URL http://website.com/room/{id}

This also becomes the share URL / Invite URL for the sake of simplicity.


4) Once the room has been defined. It gives an option to store it as a room template for the player. It then waits for the min_players to be in the room for the game to begin. Once the min_players condition is matched. The room assigns the rolls by calling an assign function, where in each player is assigned a role. And the role is displayed to the user.

Timer for each role other than villager starts. They vote on the phone.
Everyone can vote even when it's not their role. Just that their vote won't be actually counted. So that they can pretend to be someone else in the game :P
They can change their vote in their time. If no vote is given, after the stipulated time, a random player ( villager / mafia ) is killed off / healed / detected.
Then the discussion time starts after which there are two rounds of discussion_vote_time. After the first one, the voted out person is given some time to defend himself.
The final voting then takes place. And the person is killed.

These iterations repeat all over again and again until all mafia's get killed or the mafia's outnumber the villagers in the discussion time.

How do we know who all players are in the room?

    player {
     id: String ( email ),
     name: String,
     total_score: int
    }  

This player data object can be used for ranking. And global rankings and such.

-> There should definitely be a scoring system for the users who are regular to the game.

There can be login by google.. if nothing else seems to work.

Room templates can also change the existing roles..

Such as this sample Office Mafia where managers "fires" employees, the intro is that there is a huge bonus that is now to be distributed among the company :P

Mafia -> Manager

Villager -> Employee

Healer -> HR

Detective -> Accountant

## Development Planning :

Git URL : git@github.com:vibhas77/mafia.git

-> There should definitely a web - client for the application. So that people can directly play from the browser

-> Android - client for attracting users from the play store.

-> Web-service Engine / Game engine / Back-end engine

-> Database server - To store temporary data such as active rooms and to store scores, players and custom room template

## Extras :

Extra features that are like heavily optional are :

1) Chat support. Users can chat to each other through the discussion interface.

2) A nice logo never hurts

3) Good color scheme and themes and emojis and font alignments.
