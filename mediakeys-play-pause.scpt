on is_running(appName)
    tell application "System Events" to (name of processes) contains appName
end is_running

if is_running("Google Chrome") then
    tell application "System Events"
        keystroke " "
    end tell
else if is_running("VLC") then
    tell application "VLC"
        play
    end tell
end if
