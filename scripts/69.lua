local sound = script.Parent 
local maxLoudness = 410
game:GetService("RunService").RenderStepped:Connect(function()
    local loudness = sound.PlaybackLoudness
    if loudness > maxLoudness then
        beats = beats+1
    end
end)