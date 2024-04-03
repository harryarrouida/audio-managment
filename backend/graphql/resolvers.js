const Audio = require("../models/Audio");
const User = require("../models/User");
const Playlist = require("../models/Playlist");

const resolvers = {
  Query: {
    audios: async () => {
      try {
        const audios = await Audio.find();
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("Error fetching audios:", error);
        throw new Error("Failed to fetch audios");
      }
    },
    audio: async (_, { _id }) => {
      try {
        const audio = await Audio.findById(_id);
        if (!audio) {
          throw new Error("audio is not found");
        }
        return {
          ...audio._doc,
          _id: audio._id.toString(),
        };
      } catch (error) {
        console.log("Error fetching the audio: ", error);
      }
    },
    audioByTitle: async (_, args) => {
      const { title } = args;
      try {
        const audios = await Audio.find({
          title: { $regex: title, $options: "i" },
        });
        if (!audios) {
          console.log("audio not found");
          throw new Error("audio not found");
        }
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("error fetching the audio by name:", error);
      }
    },
    feedAudios: async (_, { offset, limit }) => {
      try {
        const audios = await Audio.find().skip(offset).limit(limit);
        return audios.map((audio) => ({
          ...audio._doc,
          _id: audio._id.toString(),
        }));
      } catch (error) {
        console.log("error paginate the audios");
      }
    },
    users: async () => {
      try {
        const users = await User.find();
        return users.map((user) => ({
          ...user._doc,
          _id: user._id.toString(),
        }));
      } catch (error) {
        console.log("error fetching users");
      }
    },
    playlists: async (_, { _id }) => {
      try {
        const playlists = await Playlist.find({ user: _id });
        return playlists.map((playlist) => ({
          ...playlist._doc,
          _id: playlist._id.toString(),
        }));
      } catch (error) {
        console.log("error fetching playlists:", error.message);
        throw error;
      }
    },
    playlist: async (_, { _id }) => {
      try {
        const playlist = await Playlist.findById(_id);
        return playlist;
      } catch (error) {
        console.log("error fetching playlist:", error.message);
        throw error;
      }
    },
  },
  Mutation: {
    createAudio: async (_, { audioInput }) => {
      const {
        title,
        date_production,
        productors,
        nbr_invoice,
        nbr_contract,
        type_support,
        nbr_support,
        tech_comments,
        quality,
        language,
        frequency,
        synopsis,
        type,
        commentator,
        event_location,
        event_date,
        sequence,
        presenter,
        preparation,
        format,
        version,
        speaker,
        causerie_reciter,
        causerie_location,
        quran_reciter,
        recite_type,
        singer,
        interpreter,
        composer,
        music_writer,
        musical_genre,
        lyrics,
        orchestra,
        distribution,
        author,
        actor,
        fiction_writer,
        adaptation,
      } = audioInput;

      const audio = new Audio({
        title,
        date_production,
        productors,
        nbr_invoice,
        nbr_contract,
        type_support,
        nbr_support,
        tech_comments,
        quality,
        language,
        frequency,
        synopsis,
        type,
        commentator,
        event_location,
        event_date,
        sequence,
        presenter,
        preparation,
        format,
        version,
        speaker,
        causerie_reciter,
        causerie_location,
        quran_reciter,
        recite_type,
        singer,
        interpreter,
        composer,
        music_writer,
        musical_genre,
        lyrics,
        orchestra,
        distribution,
        author,
        actor,
        fiction_writer,
        adaptation,
      });

      try {
        const result = await audio.save();
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("Error saving audio:", error);
        throw new Error("Failed to save audio");
      }
    },
    deleteAudio: async (_, { _id }) => {
      try {
        const result = await Audio.findByIdAndDelete(_id);
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("failed to delete the audio");
      }
    },

    createPlaylist: async (_, { name, description, user, audios }) => {
      try {
        const result = await Playlist.create({
          name,
          description,
          user,
          audios,
        });
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("Error saving playlist:", error);
        throw new Error("Failed to save playlist");
      }
    },
    pushPlaylistToUser: async (_, { playlist, userId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }
        user.playlists.push(playlist);
        await user.save();
        return user;
      } catch (error) {
        throw new Error("Failed to save user playlist");
      }
    },
    pushAudioToPlaylist: async (_, {playlistId, audioId}) => {
      try {
        const playlist = await Playlist.findById(playlistId)
        if(!playlist){
          throw new Error("Playlist not found");
        }
        playlist.audios.push(audio);
        await playlist.save();
        return playlist;
      } catch (error) {
        throw new Error("Failed to save audio playlist");
      }
    },
    deletePlaylist: async (_, { _id }) => {
      try {
        const result = await Playlist.findByIdAndDelete(_id);
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      } catch (error) {
        console.log("failed to delete the playlist");
      }
    },
  },
  Playlist: {
    audios: async (parent) => {
      try {
        const audioIds = parent.audios;
        const audios = await Audio.find({ _id: { $in: audioIds } });
        return audios;
      } catch (error) {
        throw new Error("Failed to fetch audios for the playlist");
      }
    },
  },
  User: {
    playlists: async (parent) => {
      try {
        const playlistsIds = parent.playlists;
        const playlists = await Playlist.find({ _id: { $in: playlistsIds } });
        return playlists;
      } catch (error) {
        throw new Error("Failed to fetch playlists for user", error);
      }
    },
  },
};

module.exports = resolvers;
