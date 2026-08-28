# 🎵 DJ Music Creator

A simple and interactive **DJ Music Creator** web application that allows users to upload audio samples, assign them to keyboard keys, play sounds in real time, record performances, and export both the sequence and the recorded audio.

## ✨ Features

* 🎹 **Virtual Keyboard**

  * Interactive on-screen keyboard.
  * Supports physical computer keyboard input.
  * Keys visually react when pressed.

* 🔊 **Custom Sound Upload**

  * Upload audio files directly from the interface.
  * Assign each uploaded sound to a keyboard key.
  * Sounds can be triggered using the virtual keyboard or physical keyboard.

* 🎙️ **Audio Recording**

  * Start and stop audio recording.
  * Records the sounds played through the application.
  * Uses the browser's `MediaRecorder` API.

* 📝 **Sequence Recording**

  * Records every key press and release.
  * Stores the key, action, and timestamp.
  * Export the sequence as a JSON file.

* 🎧 **MP3 Export**

  * Recorded audio is initially captured as WebM/Opus.
  * Converts the recording to MP3 directly in the browser using `lamejs`.

* ⚡ **Web Audio API**

  * Uses `AudioContext` and `MediaStreamDestination` to route and record audio.

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **Web Audio API**
* **MediaRecorder API**
* **Fetch API**
* **lamejs**
* **JSON**
* **Audio/WebM/MP3**

## 📂 Project Structure

```text
DJ-Music-Creator/
│
├── index.html
├── README.md
└── ...
```

The main application interface and JavaScript logic are contained in the HTML file.

## 🚀 How It Works

### 1. Upload a Sound

Select an audio file and enter the keyboard key that should trigger it.

The application sends the sound to the `/upload` endpoint:

```text
POST /upload
```

The returned sound mapping is then stored in the application.

### 2. Play Sounds

Once sounds are assigned, they can be triggered using:

* The virtual keyboard
* The physical computer keyboard

The application uses the Web Audio API to route sounds both to the speakers and to the recording destination.

### 3. Record a Performance

Click:

```text
Start Recording
```

The application records:

* The audio output
* Key presses
* Key releases
* Timing information

Click **Stop Recording** to finish.

### 4. Export the Sequence

Click:

```text
Download Sequence
```

The application generates a `sequence.json` file containing events similar to:

```json
[
  {
    "key": "A",
    "action": "start",
    "timestamp": 125
  },
  {
    "key": "A",
    "action": "stop",
    "timestamp": 850
  }
]
```

### 5. Export the Audio

Click:

```text
Download Audio
```

The recorded audio is converted from WebM to MP3 using `lamejs` and downloaded as:

```text
recorded_audio.mp3
```

## 🔌 Backend API

The frontend expects the following endpoints.

### Upload Sound

```http
POST /upload
```

Form data:

```text
sound: audio file
key: keyboard key
```

Expected response:

```json
{
  "key": "A",
  "sound": "path/to/sound"
}
```

### Get Available Sounds

```http
GET /sounds
```

Expected response:

```json
{
  "A": "path/to/sound1",
  "B": "path/to/sound2"
}
```

## 💻 Running the Project

### Prerequisites

Make sure you have:

* A modern web browser
* A backend server implementing `/upload` and `/sounds`
* Internet access for the `lamejs` CDN dependency

### Start the Application

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/dj-music-creator.git
```

Open the project and start your backend server.

Then access the application through your local server, for example:

```text
http://localhost:3000
```

> Opening the HTML file directly may not work correctly because the application communicates with backend API endpoints.

## 🎹 Supported Keyboard

The application creates a keyboard containing keys such as:

```text
` 1 2 3 4 5 6 7 8 9 0 - =
Q W E R T Y U I O P
A S D F G H J K L
Z X C V B N M
Control Alt Space
```

Sounds are triggered when the corresponding key is pressed.

## 🎯 Use Cases

This project can be used as:

* 🎧 A simple DJ soundboard
* 🎵 A music experimentation tool
* 🥁 A sample pad
* 🎙️ A browser-based recording tool
* 👨‍💻 A JavaScript/Web Audio API learning project

## 🔮 Future Improvements

Possible improvements include:

* 🎚️ Volume controls for individual sounds
* 🎛️ Volume and pitch effects
* 🔁 Loop controls
* ⏱️ BPM and tempo control
* 🎼 Sequence playback
* 💾 Save/load projects
* 🎨 Improved modern UI
* 📱 Mobile/tablet support
* 🎚️ Audio effects such as reverb, delay, and distortion
* 📊 Audio waveform visualization
* 🎤 Microphone recording
* ☁️ Cloud storage for projects

## 👨‍💻 Author

**Wael Gabsi**

Software Engineer

## 📄 License

This project is intended for demonstration and educational purposes.

Please make sure you have the necessary rights to any audio samples uploaded or distributed with the application.
