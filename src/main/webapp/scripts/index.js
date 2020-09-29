// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function addComment() {
    const username = document.getElementById("comment-username").value;
    const text = document.getElementById("comment-input").value;
    fetch(`/data?username=${username}&text=${text}`, { method: "POST" }).then(
        (res) => {
            if (res.ok) {
                rerenderCommentsWithCurrentLimit();
                document.getElementById("comment-username").value = "";
                document.getElementById("comment-input").value = "";
            } else {
                alert("Error: Enter a valid comment.");
            }
        }
    );
}

